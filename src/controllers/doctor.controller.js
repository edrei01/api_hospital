const db = require('../config/conexion');

const obtenerDoctor = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM doctor;', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const obtenerDoctorPorid = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM doctor WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
} 

const crearDoctor = (user) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO doctor SET ?', user, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }); 
  });
}

const actualizarDoctor = (id, user) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE doctor SET ? WHERE id = ?', [user, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const borrarDoctor = (id) => {
  return new Promise((resolve, reject) => {
    console.log('Intentando eliminar carrera con ID:', id); // Agregar registro para depuración
    db.query('DELETE FROM doctor WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al eliminar carrera:', err); // Agregar registro de error
        reject(err);
      }
      resolve(results);
    });
  });
}


module.exports = {
  obtenerDoctor,
  obtenerDoctorPorid, 
  crearDoctor,
  actualizarDoctor,
  borrarDoctor
}