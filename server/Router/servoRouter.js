const express = require("express");
const arduinoControllers = require("../Controllers/servoController"); 

const router = express.Router();


router.put("/abrir-caseta-prime", arduinoControllers.abrirPrime); 

module.exports = router;
