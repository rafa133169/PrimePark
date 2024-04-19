const express = require("express");
const arduinoControllers = require("../Controllers/servoController"); 

const router = express.Router();


router.put("/abrir-caseta-prime", arduinoControllers.abrirPrime); 
router.put("/abrir-caseta-estandar", arduinoControllers.abrirStandar); 
router.put("/salir-caseta-prime", arduinoControllers.salirPremium); 
router.put("/salir-caseta-estandar", arduinoControllers.salirStandar); 



module.exports = router;
