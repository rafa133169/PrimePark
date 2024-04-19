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

    connection.query("UPDATE servo set estatus = 1 where id_servo = 1", 
    (error, results) => {
        if (error) {
          console.error("Error al actualizar Info del servo Prime", error);
          res.status(500).json({ error: "Error al actualizar Info del servo Prime" });
        } else {
          res.json({ message: "Info del servo Prime actualizada correctamente" });
        }
      });

      connection.query("UPDATE infrarojos set estatus = 'vacio' where id_infrarojo = 1", 
    (error, results) => {
        if (error) {
          console.error("Error al actualizar Info del servo Prime", error);
          res.status(500).json({ error: "Error al actualizar Info del servo Prime" });
        } else {
          res.json({ message: "Info del servo Prime actualizada correctamente" });
        }
      });
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

    connection.query("UPDATE servo set estatus = 2 where id_servo = 1", 
    (error, results) => {
        if (error) {
          console.error("Error al actualizar Info del servo Prime", error);
          res.status(500).json({ error: "Error al actualizar Info del servo Prime" });
        } else {
          res.json({ message: "Info del servo Prime actualizada correctamente" });
        }
      });

      connection.query("UPDATE infrarojos set estatus = 'vacio' where id_infrarojo = 2", 
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
    abrirStandar,
    salirStandar,
    salirPremium,
  };