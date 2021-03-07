
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
    error_reporter->Report("Type A:");
    keyboard.print("A");
  } else if (kind == 1) {
    error_reporter->Report("Type B:");
    keyboard.print("B");
  } else if (kind == 2) {
    error_reporter->Report("Type C:");
    keyboard.print("C");
  } else if (kind == 3) {
    error_reporter->Report("Type D:");
    keyboard.print("D");
  } else if (kind == 4) {
    error_reporter->Report("Type E:");
    keyboard.print("E");
  }  else if (kind == 5) {
    error_reporter->Report("Type F:");
    keyboard.print("F");
  }  else if (kind == 6) {
    error_reporter->Report("Type G:");
    keyboard.print("G");
  }  else if (kind == 7) {
    error_reporter->Report("Type H:");
    keyboard.print("H");
  }   else if (kind == 8) {
    error_reporter->Report("Type I:");
    keyboard.print("I");
  }   else if (kind == 9) {
    error_reporter->Report("Type J:");
    keyboard.print("J");
  }   else if (kind == 10) {
    error_reporter->Report("Type K:");
    keyboard.print("K");
  }   else if (kind == 11) {
    error_reporter->Report("Type L:");
    keyboard.print("L");
  }   else if (kind == 12) {
    error_reporter->Report("Type M:");
    keyboard.print("M");
  }   else if (kind == 13) {
    error_reporter->Report("Type N:");
    keyboard.print("N");
  }   else if (kind == 14) {
    error_reporter->Report("Type O:");
    keyboard.print("O");
  }   else if (kind == 15) {
    error_reporter->Report("Type P:");
    keyboard.print("P");
  }   else if (kind == 16) {
    error_reporter->Report("Type Q:");
    keyboard.print("Q");
  }   else if (kind == 17) {
    error_reporter->Report("Type R:");
    keyboard.print("R");
  }   else if (kind == 18) {
    error_reporter->Report("Type S:");
    keyboard.print("S");
  }   else if (kind == 19) {
    error_reporter->Report("Type T:");
    keyboard.print("T");
  }   else if (kind == 20) {
    error_reporter->Report("Type U:");
    keyboard.print("U");
  }   else if (kind == 21) {
    error_reporter->Report("Type V:");
    keyboard.print("V");
  }   else if (kind == 22) {
    error_reporter->Report("Type W:");
    keyboard.print("W");
  }   else if (kind == 23) {
    error_reporter->Report("Type X:");
    keyboard.print("X");
  }   else if (kind == 24) {
    error_reporter->Report("Type Y:");
    keyboard.print("Y");
  }   else if (kind == 25) {
    error_reporter->Report("Type Z:");
    keyboard.print("Z");
  }   else if (kind == 26) {
    error_reporter->Report("Type 0:");
    keyboard.print("0");
  }   else if (kind == 27) {
    error_reporter->Report("Type 1:");
    keyboard.print("1");
  }   else if (kind == 28) {
    error_reporter->Report("Type 2:");
    keyboard.print("2");
  }   else if (kind == 29) {
    error_reporter->Report("Type 3:");
    keyboard.print("3");
  }   else if (kind == 30) {
    error_reporter->Report("Type 4:");
    keyboard.print("4");
  }   else if (kind == 31) {
    error_reporter->Report("Type 5:");
    keyboard.print("5");
  }   else if (kind == 32) {
    error_reporter->Report("Type 6:");
    keyboard.print("6");
  }   else if (kind == 33) {
    error_reporter->Report("Type 7:");
    keyboard.print("7");
  }   else if (kind == 34) {
    error_reporter->Report("Type 8:");
    keyboard.print("8");
  }   else if (kind == 35) {
    error_reporter->Report("Type 9:");
    keyboard.print("9");
  }   
}
