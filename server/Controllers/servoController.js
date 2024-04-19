const connection = require("../database");

const abrirPrime = (req, res) => {

    connection.query("UPDATE servo set estatus = 1 where id_servo = 1", 
    (error, results) => {
        if (error) {
          console.error("Error al actualizar Info del servo Prime", error);
          res.status(500).json({ error: "Error al actualizar Info del servo Prime" });
        } else {
          res.json({ message: "Info del servo Prime actualizada correctamente" });
        }
      });
  };
  
  const salirPremium = (req, res) => {
    connection.query(
      "UPDATE servo SET estatus = 1 WHERE id_servo = 1",
      (error, servoResults) => {
        if (error) {
          console.error("Error al actualizar Info del servo Prime", error);
          return res.status(500).json({ error: "Error al actualizar Info del servo Prime" });
        } else {
          connection.query(
            "UPDATE infrarojos SET estatus = 'vacio' WHERE id_infrarojo = 1",
            (error, infrarojosResults) => {
              if (error) {
                console.error("Error al actualizar Info del servo Prime", error);
                return res.status(500).json({ error: "Error al actualizar Info del servo Prime" });
              } else {
                // Ambas consultas se completaron correctamente, enviar la respuesta
                return res.json({ message: "Información actualizada correctamente" });
              }
            }
          );
        }
      }
    );
  };
  


  const abrirStandar = (req, res) => {

    connection.query("UPDATE servo set estatus = 2 where id_servo = 1", 
    (error, results) => {
        if (error) {
          console.error("Error al actualizar Info del servo Prime", error);
          res.status(500).json({ error: "Error al actualizar Info del servo Prime" });
        } else {
          res.json({ message: "Info del servo Prime actualizada correctamente" });
        }
      });
  };
  const salirStandar = (req, res) => {
    connection.query(
      "UPDATE servo SET estatus = 2 WHERE id_servo = 1",
      (error, servoResults) => {
        if (error) {
          console.error("Error al actualizar Info del servo Prime", error);
          return res.status(500).json({ error: "Error al actualizar Info del servo Prime" });
        } else {
          connection.query(
            "UPDATE infrarojos SET estatus = 'vacio' WHERE id_infrarojo = 2",
            (error, infrarojosResults) => {
              if (error) {
                console.error("Error al actualizar Info del servo Prime", error);
                return res.status(500).json({ error: "Error al actualizar Info del servo Prime" });
              } else {
                // Ambas consultas se completaron correctamente, enviar la respuesta
                return res.json({ message: "Información actualizada correctamente" });
              }
            }
          );
        }
      }
    );
  };
  

  const obtenerSensorPrime = (req, res) => {
  
    connection.query("SELECT estatus FROM infrarojos WHERE id_infrarojo = 1", (error, results) => {
      if (error) {
        res.status(500).json({ error: "Ocurrió un error al obtener informacion por ID" });
      } else if (results.length === 0) {
        res.status(404).json({ error: "La informacion no fue encontrada por ID" });
      } else {
        res.json(results[0]);
      }
    });
  };
  const obtenerSensorEstandar = (req, res) => {
  
    connection.query("SELECT estatus FROM infrarojos WHERE id_infrarojo = 2", (error, results) => {
      if (error) {
        res.status(500).json({ error: "Ocurrió un error al obtener informacion por ID" });
      } else if (results.length === 0) {
        res.status(404).json({ error: "La informacion no fue encontrada por ID" });
      } else {
        res.json(results[0]);
      }
    });
  };

  module.exports = {
    abrirPrime,
    abrirStandar,
    salirStandar,
    salirPremium,
    obtenerSensorPrime,
    obtenerSensorEstandar,
  };