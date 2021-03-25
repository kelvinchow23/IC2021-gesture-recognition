
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
#include <Arduino.h>

void HandleOutputKeyboard(BleComboKeyboard keyboard, tflite::ErrorReporter* error_reporter, int kind) {
  if (kind == 0) {
    error_reporter->Report("Type A:");
    keyboard.print("A\n");
  } else if (kind == 1) {
    error_reporter->Report("Type B:");
    keyboard.print("B\n");
  } else if (kind == 2) {
    error_reporter->Report("Type C:");
    keyboard.print("C\n");
  } else if (kind == 3) {
    error_reporter->Report("Type D:");
    keyboard.print("D\n");
  } else if (kind == 4) {
    error_reporter->Report("Type E:");
    keyboard.print("E\n");
  }  else if (kind == 5) {
    error_reporter->Report("Type F:");
    keyboard.print("F\n");
  }  else if (kind == 6) {
    error_reporter->Report("Type G:");
    keyboard.print("G\n");
  }  else if (kind == 7) {
    error_reporter->Report("Type H:");
    keyboard.print("H\n");
  }   else if (kind == 8) {
    error_reporter->Report("Type I:");
    keyboard.print("I\n");
  }   else if (kind == 9) {
    error_reporter->Report("Type J:");
    keyboard.print("J\n");
  }   else if (kind == 10) {
    error_reporter->Report("Type K:");
    keyboard.print("K\n");
  }   else if (kind == 11) {
    error_reporter->Report("Type L:");
    keyboard.print("L\n");
  }   else if (kind == 12) {
    error_reporter->Report("Type M:");
    keyboard.print("M\n");
  }   else if (kind == 13) {
    error_reporter->Report("Type N:");
    keyboard.print("N\n");
  } else if (kind == 14) {
    error_reporter->Report("Type O:");
    keyboard.print("O\n");
  }   else if (kind == 15) {
    error_reporter->Report("Type P:");
    keyboard.print("P\n");
  }   else if (kind == 16) {
    error_reporter->Report("Type Q:");
    keyboard.print("Q\n");
  }   else if (kind == 17) {
    error_reporter->Report("Type R:");
    keyboard.print("R\n");
  }   else if (kind == 18) {
    error_reporter->Report("Type S:");
    keyboard.print("S\n");
  }   else if (kind == 19) {
    error_reporter->Report("Type T:");
    keyboard.print("T\n");
  }   else if (kind == 20) {
    error_reporter->Report("Type U:");
    keyboard.print("U\n");
  }   else if (kind == 21) {
    error_reporter->Report("Type V:");
    keyboard.print("V\n");
  }   else if (kind == 22) {
    error_reporter->Report("Type W:");
    keyboard.print("W\n");
  }   else if (kind == 23) {
    error_reporter->Report("Type X:");
    keyboard.print("X\n");
  }   else if (kind == 24) {
    error_reporter->Report("Type Y:");
    keyboard.print("Y\n");
  }   else if (kind == 25) {
    error_reporter->Report("Type Z:");
    keyboard.print("Z\n");
  }else if (kind == 26) {
    error_reporter->Report("Type WAVE:");
    keyboard.print("Hello! ");
    delay(70);
    keyboard.print("My na");
    delay(70);
    keyboard.print("me is ");
    delay(70);
    keyboard.print("Kelvin\n");
  }   else if (kind == 27) {
    error_reporter->Report("Type HAPPY:");
    keyboard.print(":) \n");
  }   else if (kind == 28) {
    error_reporter->Report("Type BURRITO:");
    keyboard.print("Can I ");
    delay(70);
    keyboard.print("have a");
    delay(70);
    keyboard.print(" burri");    
    delay(70);
    keyboard.print("to ple");
    delay(70);
    keyboard.print("ase?\n");

  }   else if (kind == 29) {
    error_reporter->Report("Type CILANTRO:");
    keyboard.print("Hold the");
    delay(70);
    keyboard.print(" cil");
    delay(70);
    keyboard.print("antro\n");
    delay(70);
  }   else if (kind == 30) {
    error_reporter->Report("Type SPACE");
    keyboard.print(" ");
  }   
}
