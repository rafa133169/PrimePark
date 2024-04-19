const express = require("express");
const cors = require("cors");


const arduinoRouter = require("./Router/arduinoRouter");
const servoRouter = require("./Router/servoRouter");

const app = express();

app.use(cors());

app.use(express.json());

// Ruta al Router
app.use("/arduino", arduinoRouter); 
app.use("/caseta", servoRouter); 




app.listen(4001, () => {
  console.log("API escuchando por el puerto 4001");
});