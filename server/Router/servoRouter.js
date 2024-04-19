const express = require("express");
const arduinoControllers = require("../Controllers/servoController"); 

const router = express.Router();


router.put("/abrir-caseta-prime", arduinoControllers.abrirPrime); 
router.put("/abrir-caseta-estandar", arduinoControllers.abrirStandar); 
router.put("/salir-caseta-prime", arduinoControllers.salirPremium); 
router.put("/salir-caseta-estandar", arduinoControllers.salirStandar); 
router.get("/info-caseta-estandar", arduinoControllers.obtenerSensorEstandar); 
router.get("/info-caseta-prime", arduinoControllers.obtenerSensorPrime); 





module.exports = router;
