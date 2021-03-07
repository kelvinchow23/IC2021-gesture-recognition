/* Copyright 2019 The TensorFlow Authors. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  ==============================================================================*/
// https://github.com/TheNitek/ESP32-NimBLE-Combo
// https://github.com/h2zero/NimBLE-Arduino
// https://github.com/tanakamasayuki/Arduino_TensorFlowLite_ESP32

//Change to MAC address of your device
//uint8_t broadcastAddressM5StickC[] = {0x, 0x, 0x, 0x, 0x, 0x}; 
 uint8_t broadcastAddressM5StickC[] = {0x50, 0x02, 0x91, 0x8C, 0xDC, 0xB8}; // Sample MAC address

#include <TensorFlowLite_ESP32.h>

#include "main_functions.h"
#include "accelerometer_handler.h"
#include "gesture_predictor.h"
#include "magic_wand_model_data.h"
#include "output_handler_keyboard.h"
#include "tensorflow/lite/experimental/micro/kernels/micro_ops.h"
#include "tensorflow/lite/experimental/micro/micro_error_reporter.h"
#include "tensorflow/lite/experimental/micro/micro_interpreter.h"
#include "tensorflow/lite/experimental/micro/micro_mutable_op_resolver.h"
#include "tensorflow/lite/schema/schema_generated.h"
#include "tensorflow/lite/version.h"

#include <M5StickC.h>
#include <BleCombo.h>
#include <esp_now.h>
#include <WiFi.h>

// Globals, used for compatibility with Arduino-style sketches.
namespace {
tflite::ErrorReporter* error_reporter = nullptr;
const tflite::Model* model = nullptr;
tflite::MicroInterpreter* interpreter = nullptr;
TfLiteTensor* model_input = nullptr;
int input_length;

// Create an area of memory to use for input, output, and intermediate arrays.
// The size of this will depend on the model you're using, and may need to be
// determined by experimentation.
constexpr int kTensorArenaSize = 60 * 1024;
uint8_t tensor_arena[kTensorArenaSize];

// Whether we should clear the buffer next time we fetch data
bool should_clear_buffer = false;

}  // namespace

BleComboKeyboard keyboard;

const int numStates = 2;       // Set this variable to the number of device states.  
const int thisDeviceID = 2;    // DO NOT USE 0 or 1.  Use 2 for remote A, 3 for remote B,4 for remote C, etc.
const int period = 50;         // Set time delay in ms.  50 ms = 20 Hz sampling frequency.

const int btnPin = 26;    // Change to 37 for M5StickC, 26 for custom device.
const int motorPin = 25;
int joyState = 0;       // 0 = deployed model mode, 1 = training mode
String devName;

float accX = 0;
float accY = 0;
float accZ = 0;
float usbVoltage;
float batVoltage;

// Structure example to send data
// Must match the receiver structure
typedef struct struct_message {
  int id;
  int state;
  float aX;
  float aY;
  float aZ;
  float battery;
  String message;
} struct_message;

// Create a struct_message called myData
struct_message myData;

// callback when data is sent
void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  if ((status == ESP_NOW_SEND_FAIL)){
    delay(50);
    if ((usbVoltage < 2) && (joyState == 1)) {    // Other device needs to be powered on for this to work
      //Serial.println("Didn't work, oh no, go to sleep, goodnight");
      vibrate(500);
      esp_deep_sleep_start();    
    }
  }
}

// callback when data is received
void OnDataRecv(const uint8_t * mac_addr, const uint8_t *incomingData, int len) {
  memcpy(&myData, incomingData, sizeof(myData));    
  //Read incoming data from receiver to set different vibration patterns
  if (myData.message == "SELECT") {
    vibrate(100);
    delay(50);
    vibrate(100);    
  }
  else if (myData.message == "BUZZ") {
    vibrate(100);
  }
}

// Code is run when the button on the remote is pressed
void sendJoystickState() {
  //Serial.println(joyState);
  usbVoltage = M5.Axp.GetVBusVoltage();
  batVoltage = M5.Axp.GetBatVoltage();
  if (joyState == numStates) {
    myData.id = 0;
    myData.state = joyState;
    esp_err_t result = esp_now_send(broadcastAddressM5StickC, (uint8_t *) &myData, sizeof(myData));
    //Serial.println("Going to sleep now");
    vibrate(500);   // long vibration indicates device going to sleep
    delay(1000);
    esp_deep_sleep_start();
  }
  else {    // Only 1 case here where joyState == 1 (Training mode)
    for (int i=0; i<=joyState; i++) {
        vibrate(100);  
        delay(50);
    }
    M5.Lcd.fillScreen(DARKGREY);
    M5.Lcd.setCursor(3,30);
    M5.Lcd.print("TRAINING MODE");
  }
  myData.id = 0;  // 0 is id for setting device state
  myData.message = devName;
  myData.state = joyState;
  myData.battery = batVoltage;
  esp_err_t result = esp_now_send(broadcastAddressM5StickC, (uint8_t *) &myData, sizeof(myData));
  delay(100);
}

void vibrate(int duration){   // Send user a single pulse. Duration in millesconds.
  digitalWrite(motorPin, HIGH);
  delay(duration);
  digitalWrite(motorPin, LOW);
}

// The name of this function is important for Arduino compatibility.
void setup() {
  M5.begin();
  //Serial.begin(115200);

  keyboard.begin();
  pinMode(btnPin,INPUT_PULLUP);
  pinMode(motorPin, OUTPUT);
  devName = "DEV" + String(thisDeviceID);

  if (btnPin == 26) {
      esp_sleep_enable_ext0_wakeup(GPIO_NUM_26,0);   // Setup the big button (GPIO pin 26) to wake up from sleep. Change to 37 for M5StickC out of the box.
  }
  else {
      esp_sleep_enable_ext0_wakeup(GPIO_NUM_37,0);   // Setup the big button (GPIO pin 26) to wake up from sleep. Change to 37 for M5StickC out of the box.
      M5.Lcd.fillScreen(BLACK);
      M5.Lcd.setTextColor(WHITE);
      M5.Lcd.setRotation(1);
      M5.Lcd.setTextSize(2);
      M5.Lcd.setCursor(3,30);
      M5.Lcd.print(" GESTURE MODE");
  }
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);

  vibrate(100);

  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    //Serial.println("Error initializing ESP-NOW");
    //Serial.println("Go to sleep, goodnight");
    vibrate(500);
    esp_deep_sleep_start();  // Any failed connection puts the device to sleep
    return;
  }

  // Once ESPNow is successfully Init, we will register for Send CB to
  // get the status of Trasnmitted packet
  esp_now_register_send_cb(OnDataSent);
  
  // Register peer
  esp_now_peer_info_t peerInfo;
  peerInfo.channel = 0;  
  peerInfo.encrypt = false;
  memcpy(peerInfo.peer_addr, broadcastAddressM5StickC, 6);
  
  // Add peer        
  if (esp_now_add_peer(&peerInfo) != ESP_OK){
    //Serial.println("Failed to add peer");
    //Serial.println("Go to sleep, goodnight");
    vibrate(500);
    esp_deep_sleep_start();  // Any failed connection puts the device to sleep
    return;
  }
  // Register for a callback function that will be called when data is received
  esp_now_register_recv_cb(OnDataRecv);
  

  // Set up logging. Google style is to avoid globals or statics because of
  // lifetime uncertainty, but since this has a trivial destructor it's okay.
  static tflite::MicroErrorReporter micro_error_reporter;  // NOLINT
  error_reporter = &micro_error_reporter;

  // Map the model into a usable data structure. This doesn't involve any
  // copying or parsing, it's a very lightweight operation.
  model = tflite::GetModel(g_magic_wand_model_data);
  if (model->version() != TFLITE_SCHEMA_VERSION) {
    error_reporter->Report(
      "Model provided is schema version %d not equal "
      "to supported version %d.",
      model->version(), TFLITE_SCHEMA_VERSION);
    return;
  }

  // Pull in only the operation implementations we need.
  // This relies on a complete list of all the ops needed by this graph.
  // An easier approach is to just use the AllOpsResolver, but this will
  // incur some penalty in code space for op implementations that are not
  // needed by this graph.
  static tflite::MicroMutableOpResolver micro_mutable_op_resolver;  // NOLINT
  micro_mutable_op_resolver.AddBuiltin(
    tflite::BuiltinOperator_DEPTHWISE_CONV_2D,
    tflite::ops::micro::Register_DEPTHWISE_CONV_2D());
  micro_mutable_op_resolver.AddBuiltin(
    tflite::BuiltinOperator_MAX_POOL_2D,
    tflite::ops::micro::Register_MAX_POOL_2D());
  micro_mutable_op_resolver.AddBuiltin(tflite::BuiltinOperator_CONV_2D,
                                       tflite::ops::micro::Register_CONV_2D());
  micro_mutable_op_resolver.AddBuiltin(
    tflite::BuiltinOperator_FULLY_CONNECTED,
    tflite::ops::micro::Register_FULLY_CONNECTED());
  micro_mutable_op_resolver.AddBuiltin(tflite::BuiltinOperator_SOFTMAX,
                                       tflite::ops::micro::Register_SOFTMAX());

  // Build an interpreter to run the model with
  static tflite::MicroInterpreter static_interpreter(
    model, micro_mutable_op_resolver, tensor_arena, kTensorArenaSize,
    error_reporter);
  interpreter = &static_interpreter;

  // Allocate memory from the tensor_arena for the model's tensors
  interpreter->AllocateTensors();

  // Obtain pointer to the model's input tensor
  model_input = interpreter->input(0);
  if ((model_input->dims->size != 4) || (model_input->dims->data[0] != 1) ||
      (model_input->dims->data[1] != 128) ||
      (model_input->dims->data[2] != kChannelNumber) ||
      (model_input->type != kTfLiteFloat32)) {
    error_reporter->Report("Bad input tensor parameters in model");
    return;
  }

  input_length = model_input->bytes / sizeof(float);

  TfLiteStatus setup_status = SetupAccelerometer(error_reporter);
  if (setup_status != kTfLiteOk) {
    error_reporter->Report("Set up failed\n");
  }
}

void loop() {
  // Attempt to read new data from the accelerometer
  bool got_data = ReadAccelerometer(error_reporter, model_input->data.f,
                                    input_length, should_clear_buffer);
  // Don't try to clear the buffer again
  should_clear_buffer = false;
  // If there was no new data, wait until next time
  if (!got_data) return;

   if (digitalRead(btnPin) == LOW){    // Check for button press to switch states
      joyState++;
      sendJoystickState();    // Only communicate with other ESP32 device for training mode   m
      delay(100);             // Debounce 
    }
     
    char s[260];
    float *f = model_input->data.f;
    float *p = interpreter->output(0)->data.f;

  if (joyState == 0) {
    // Run inference, and report any error
    TfLiteStatus invoke_status = interpreter->Invoke();
    if (invoke_status != kTfLiteOk) {
      error_reporter->Report("Invoke failed on index: %d\n", begin_index);
      return;
    }
    //sprintf(s, "%+6.0f : %+6.0f : %+6.0f || H %3.2f : E %3.2f : L %3.2f : O %3.2f : W %3.2f : R %3.2f : D %3.2f : U %3.2f : S %3.2f : N %3.2f",  \
              f[381], f[382], f[383], p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]);
              
    sprintf(s, "%+6.0f : %+6.0f : %+6.0f || A %3.2f : B %3.2f : C %3.2f : D %3.2f : E %3.2f : F %3.2f : G %3.2f : H %3.2f : I %3.2f : J %3.2f : K %3.2f : L %3.2f : M %3.2f : N %3.2f : O %3.2f : P %3.2f : Q %3.2f : R %3.2f : S %3.2f : T %3.2f : U %3.2f : V %3.2f : W %3.2f : X %3.2f : Y %3.2f : Z %3.2f",  \
      f[381], f[382], f[383], p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15], p[16], p[17], p[18], p[19], p[20], p[21], p[22], p[23], p[24], p[25]);
    error_reporter->Report(s);
    // Analyze the results to obtain a prediction
    int gesture_index = PredictGesture(interpreter->output(0)->data.f);
    // Clear the buffer next time we read data
    should_clear_buffer = gesture_index < 36;
    // Produce an output
    HandleOutputKeyboard(keyboard, error_reporter, gesture_index);
  
  }
  else {    // joyState == 1, training mode 
       myData.aX = f[381];
       myData.aY = f[382];
       myData.aZ = f[383];
       myData.id = thisDeviceID;
       usbVoltage = M5.Axp.GetVBusVoltage();
       esp_err_t result = esp_now_send(broadcastAddressM5StickC, (uint8_t *) &myData, sizeof(myData));  
  }
}
