const db = require('../config/conexion');

const obtenerCita = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM solicitud_citas;', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const obtenerCitaPorid = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM solicitud_citas WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
} 

const crearCita = (user) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO solicitud_citas SET ?', user, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }); 
  });
}

const actualizarCita = (id, user) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE solicitud_citas SET ? WHERE id = ?', [user, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const borrarCita = (id) => {
  return new Promise((resolve, reject) => {
    console.log('Intentando eliminar carrera con ID:', id); // Agregar registro para depuración
    db.query('DELETE FROM solicitud_citas WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al Enfermedad carrera:', err); // Agregar registro de error
        reject(err);
      }
      resolve(results);
    });
  });
}


module.exports = {
  obtenerCita,
  obtenerCitaPorid, 
  crearCita,
  actualizarCita,
  borrarCita
}