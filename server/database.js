const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql-ricoline2.alwaysdata.net",
  user: "ricoline2",
  password: "1234561331",
  database: "ricoline2_primepark",
});

connection.connect((error) => {
  if (error) {
    console.error("Error al conectar la base de datos", error);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

module.exports = connection;