const connection = require("../database");

const obtenerInfo = (req, res) => {
  connection.query("SELECT * FROM tb_puerto_serial", (error, results) => {
    if (error) {
      console.error("Error al obtener info del arduino", error);
      res.status(500).json({
        error: "Error al obtener info del arduino",
      });
    } else {
      res.json(results);
    }
  });
};

const obtenerInfoPorId = (req, res) => {
  const id = req.params.id_puerto_serial;

  connection.query("SELECT * FROM tb_puerto_serial WHERE id_puerto_serial = ?", [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Ocurrió un error al obtener informacion por ID" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "La informacion no fue encontrada por ID" });
    } else {
      res.json(results[0]);
    }
  });
};

const crearInfo = (req, res) => {
  const { mensaje, dato, distancia, fecha } = req.body;

  connection.query(
    "INSERT INTO tb_puerto_serial (mensaje, dato, distancia,fecha) VALUES (?, ?, ?,?)",
    [mensaje, dato, distancia, fecha],
    (error, results) => {
      if (error) {
        console.error("Error al agregar informacion del arduino", error);
        res.status(500).json({
          error: "Error al agregar Informacion del arduino",
        });
      } else {
        res.json({ message: "Info arduino agregada correctamente" });
      }
    }
  );
};

const actualizarInfoPorId = (req, res) => {
  const id = req.params.id_puerto_serial;
  const { mensaje, dato, distancia, fecha } = req.body;
  connection.query(
    "UPDATE tb_puerto_serial SET mensaje = ?, dato = ?, distancia = ?, fecha = ? WHERE id_puerto_serial = ?",
    [mensaje, dato, distancia, fecha,id],
    (error, results) => {
      if (error) {
        console.error("Error al actualizar Info por ID", error);
        res.status(500).json({ error: "Error al actualizar Info serial por ID" });
      } else {
        res.json({ message: "Info del Serial actualizada correctamente" });
      }
    }
  );
};

const eliminarInfoPorId = (req, res) => {
  const id = req.params.id_puerto_serial;
  connection.query("DELETE FROM tb_puerto_serial WHERE id_puerto_serial = ?", [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Ocurrió un error al eliminar info del puerto serial por ID" });
    } else {
      res.json({ message: "Informacion eliminada correctamente" });
    }
  });
};

const buscarDentroRango = (req, res) => {
  const ini = req.params.ini;
  const fin = req.params.fin;
  console.log(ini + " " + fin);
  connection.query("Select * FROM tb_puerto_serial WHERE dato BETWEEN ? AND ? ", [ini,fin], (error, results) => {
    if (error) {
      console.error("Error al obtener info dentro del rango", error);
      res.status(500).json({
        error: "Error al obtener info dentro del rango",
      });
    } else {
      res.json(results);
    }
  });
};




module.exports = {
  obtenerInfo,
  obtenerInfoPorId,
  crearInfo,
  actualizarInfoPorId,
  eliminarInfoPorId,
  buscarDentroRango,
};
