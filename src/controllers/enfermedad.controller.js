const db = require('../config/conexion');

const obtenerEnfermedad = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM enfermedad_actual;', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const obtenerEnfermedadPorid = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM enfermedad_actual WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
} 

const crearEnfermedad = (user) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO enfermedad_actual SET ?', user, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }); 
  });
}

const actualizarEnfermedad = (id, user) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE enfermedad_actual SET ? WHERE id = ?', [user, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const borrarEnfermedad = (id) => {
  return new Promise((resolve, reject) => {
    console.log('Intentando eliminar carrera con ID:', id); // Agregar registro para depuración
    db.query('DELETE FROM enfermedad_actual WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al Enfermedad carrera:', err); // Agregar registro de error
        reject(err);
      }
      resolve(results);
    });
  });
}


module.exports = {
  obtenerEnfermedad,
  obtenerEnfermedadPorid, 
  crearEnfermedad,
  actualizarEnfermedad,
  borrarEnfermedad
}