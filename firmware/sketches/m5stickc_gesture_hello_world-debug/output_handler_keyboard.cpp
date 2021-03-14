
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

#include "output_handler_keyboard.h"
#include <BleCombo.h>

void HandleOutputKeyboard(BleComboKeyboard keyboard, tflite::ErrorReporter* error_reporter, int kind) {
  if (kind == 0) {
    error_reporter->Report("Type H:");
    keyboard.print("H");
  } else if (kind == 1) {
    error_reporter->Report("Type E:");
    keyboard.print("E");
  } else if (kind == 2) {
    error_reporter->Report("Type L:");
    keyboard.print("L");
  } else if (kind == 3) {
    error_reporter->Report("Type O:");
    keyboard.print("O");
  } else if (kind == 4) {
    error_reporter->Report("Type W:");
    keyboard.print("W");
  }  else if (kind == 5) {
    error_reporter->Report("Type R:");
    keyboard.print("R");
  }  else if (kind == 6) {
    error_reporter->Report("Type D:");
    keyboard.print("D");
  }  else if (kind == 7) {
    error_reporter->Report("Type U:");
    keyboard.print("U");
  }   else if (kind == 8) {
    error_reporter->Report("Type S:");
    keyboard.print("S");
  }   
}
