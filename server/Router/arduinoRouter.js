const express = require("express");
const arduinoControllers = require("../Controllers/arduinoControllers"); 

const router = express.Router();


router.get("/", arduinoControllers.obtenerInfo);
router.get("/:id_puerto_serial", arduinoControllers.obtenerInfoPorId);
router.post("/", arduinoControllers.crearInfo);
router.delete("/:id_puerto_serial", arduinoControllers.eliminarInfoPorId);
router.put("/:id_puerto_serial", arduinoControllers.actualizarInfoPorId); 
router.get("/rango/min=:ini&max=:fin", arduinoControllers.buscarDentroRango);

module.exports = router;
