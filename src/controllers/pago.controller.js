const db = require('../config/conexion');

const obtenerPago = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM historial_pagos;', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const obtenerPagoPorid = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM historial_pagos WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
} 

const crearPago = (user) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO historial_pagos SET ?', user, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }); 
  });
}

const actualizarPago = (id, user) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE historial_pagos SET ? WHERE id = ?', [user, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const borrarPago = (id) => {
  return new Promise((resolve, reject) => {
    console.log('Intentando eliminar carrera con ID:', id); // Agregar registro para depuración
    db.query('DELETE FROM historial_pagos WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al Enfermedad carrera:', err); // Agregar registro de error
        reject(err);
      }
      resolve(results);
    });
  });
}


module.exports = {
  obtenerPago,
  obtenerPagoPorid, 
  crearPago,
  actualizarPago,
  borrarPago
}