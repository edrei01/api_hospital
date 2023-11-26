const express = require('express');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Edrei01.',
  database: 'yosef'
});
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
});

module.exports = connection;