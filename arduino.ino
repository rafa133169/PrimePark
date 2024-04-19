#include <Servo.h>
#include <Keypad.h>

#define SERVO_PIN 9
#define SERVO2_PIN 10
#define SENSOR1_PIN 11
#define SENSOR2_PIN 12
char code[5];
Servo myServo;
Servo myServo2;
const int servoPosClosed = 0;
const int servoPosOpen = 105;
// const byte ROWS = 4;
// const byte COLS = 4;
// const char kp4x4Keys[ROWS][COLS] = {
//   {'1', '2', '3', 'A'},
//   {'4', '5', '6', 'B'},
//   {'7', '8', '9', 'C'},
//   {'*', '0', '#', 'D'}
// };

// byte rowKp4x4Pin[4] = {1, 2, 3, 4};
// byte colKp4x4Pin[4] = {5, 6, 7, 8};



// Keypad kp4x4 = Keypad(makeKeymap(kp4x4Keys), rowKp4x4Pin, colKp4x4Pin, ROWS, COLS);

void setup() {
  myServo.attach(SERVO_PIN);
  myServo2.attach(SERVO2_PIN);
  pinMode(SENSOR1_PIN, INPUT);
  pinMode(SENSOR2_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
 
   
    String mensaje = Serial.readStringUntil('\n');

  if(mensaje.length()>0){
    if (mensaje == "premium") {
      myServo.write(servoPosOpen);
      delay(3500);
      myServo.write(servoPosClosed);
    } else if (mensaje == "estandar") {
      myServo2.write(servoPosOpen);
      delay(3500);
      myServo2.write(servoPosClosed);
    }
  }
  
  // Leemos el estado de los sensores infrarrojos
  int sensor1Value = digitalRead(SENSOR1_PIN);
  int sensor2Value = digitalRead(SENSOR2_PIN);
  
  // Si se detecta algo en el sensor1, enviamos "st1" por el puerto serial
  if (sensor1Value == LOW) {
    Serial.println("st1");
          delay(1000);

  }
  
  // Si se detecta algo en el sensor2, enviamos "st2" por el puerto serial
  if (sensor2Value == LOW) {
    Serial.println("st2");
          delay(1000);

  }
}

