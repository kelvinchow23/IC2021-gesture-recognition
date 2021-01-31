pre#include <ArduinoJson.h>

#define BUTTON_PIN 23     // Change this to your button's GPIO pin
#define COUNTER_MAX 60
#define TIME_DELAY 50

bool external_btn = false;
DynamicJsonDocument doc(4200);
JsonArray accelData;

void buttonPressed() {
      Serial.print("A");    // Trigger web app to change state
      generateRandomData();
      serializeJson(doc, Serial);   // Send data to web app
      doc.clear();
      delay(100);
      Serial.print("Z");    //Trigger web app to post data to database
}

void generateRandomData() {
  for (int i=0; i<COUNTER_MAX; i++) {
    accelData = doc.createNestedArray();
    for (int j=0; j<3; j++) {   // Do this three times to simulate x, y, and z data
      accelData.add(random(-1000,1000)/1000.000);
    }
    delay(TIME_DELAY);      // Simulates sample frequency of IMU, should take about 3 seconds for a gesture
  }
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  if (external_btn) {
    pinMode(BUTTON_PIN, INPUT_PULLUP);
  }
}

void loop() {
  if (external_btn) {
    if (digitalRead(BUTTON_PIN) == HIGH) {
      buttonPressed();
    }
  }
  else {
    buttonPressed();
    delay(5000);
  }
}
