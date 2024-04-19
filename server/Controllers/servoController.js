const connection = require("../database");

const abrirPrime = (req, res) => {

    id_servo = 1;
    connection.query("UPDATE servo set estatus = 1 where id_servo = ?",[id_servo], 
    (error, results) => {
        if (error) {
          console.error("Error al actualizar Info del servo Prime", error);
          res.status(500).json({ error: "Error al actualizar Info del servo Prime" });
        } else {
          res.json({ message: "Info del servo Prime actualizada correctamente" });
        }
      });
  };

  module.exports = {
    abrirPrime,
   
  };