#include <M5StickC.h>
#include <esp_now.h>
#include <WiFi.h>
#include <ArduinoJson.h>

#define btnPin 37   // Change to 26 for custom gesture remote

// Variables to change for different configurations
const int numRemotes = 1; // number of gesture control remotes
const int numAngles = 3; // number of angles (pitch, roll, yaw)

int serialRead = 1;  // Serial monitor logging. 0 = nothing, 1 = IMU signals, 2 = other stuff

// Training Variables
int countTotal = 0;
int counter = 0;
const int countMax = 60;
bool counting = false;
DynamicJsonDocument doc(4200);
JsonArray accelData;


// Other variables
float batVoltage[numRemotes] = {0}; // On startup, don't show battery indicator to indicate no devices are connected
int deviceState = 2;   // 2 = off, 1 = training mode
bool deviceColour[numRemotes] = {false};

// Forward declerations
void drawHome(int);
void displayBattery(bool[numRemotes]);

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

void OnDataRecv(const uint8_t * mac_addr, const uint8_t *incomingData, int len) {
  memcpy(&myData, incomingData, sizeof(myData));    // Read data into myData variable
  if (myData.id == 2) {    // Process IMU signals from  gesture remote controllers
    countTotal += 1;      //Keep running total, not really necessary
    if (serialRead == 1 && counting) {
      accelData = doc.createNestedArray();
      accelData.add(myData.aX);
      accelData.add(myData.aY);
      accelData.add(myData.aZ);
     
      //Serial.printf("%d, %4.2f, %4.2f, %4.2f\n", counter, myData.aX, myData.aY, myData.aZ);
      counter++;
      if (counter == countMax) {
        serializeJson(doc, Serial);
        doc.clear();
        counter = 0;
        counting = false;
        countTotal++;
        drawHome(1);    // Not currently recording anymore, go back to training mode screen
        delay(200);
        Serial.print("Z");         // Trigger web app to log data.
      }
    }
  }
  else if (myData.id == 0) {    // Change device state when buttons are pressed, update LCD screen
    deviceState = myData.state;
    if (deviceState == 1) {  // Display In trainining mode
      drawHome(1);
    }
    else {  // deviceState == 2
      deviceColour[0] = true;
      drawHome(0);  // Display nothing happening, press button on gesture to do something
    }
    batVoltage[0] = myData.battery;
  }
}

void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  //if (serialRead == 2) {
    Serial.print("\r\nLast Packet Send Status:\t");
    Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Delivery Success" : "Delivery Fail");
  //}
}

void drawHome(int state) {  // 0 = device not in use, 1 = training mode selected, plug this device into USB port,
  //2 = RUNNING!!!
  

  if (state == 0) {
      actuallyDrawHome(BLACK, WHITE, " OFFLINE MODE", "NOT CONNECTED");
  }
  else if (state == 1) {
      actuallyDrawHome(DARKGREY, WHITE, "TRAINING MODE", " Device ready");
  }
  else {
    actuallyDrawHome(GREEN, RED, " TRAINING!!!", "     MOVE!");
  }
}

void actuallyDrawHome(uint16_t colorScreen, uint16_t colorText, String text1, String text2) {
    M5.Lcd.fillScreen(colorScreen);
    M5.Lcd.setCursor(3,15);
    M5.Lcd.setTextColor(colorText);
    M5.Lcd.print(text1);
    M5.Lcd.setCursor(1, 45);
    M5.Lcd.print(text2);
}
  
void setup() {
  M5.begin();
  M5.Lcd.setRotation(1);
  M5.Lcd.setTextSize(2);
  Serial.begin(115200);
  pinMode(btnPin,INPUT_PULLUP);

  // ESP-NOW setup
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);

  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error initializing ESP-NOW");
    return;
  } 
  // Once ESPNow is successfully Init, we will register for recv CB to
  // get recv packer info
  esp_now_register_recv_cb(OnDataRecv);

  drawHome(0);
  delay(2000);
  Serial.println("Training Device MAC address: ");
  Serial.println(WiFi.macAddress());
  
}

void loop() {
  if ((digitalRead(btnPin) == LOW) && (deviceState==1) && !counting) {
    counting = true;
    Serial.print("A");    // Trigger web app to display "GO" and green letter.
    drawHome(2);
  }

}
