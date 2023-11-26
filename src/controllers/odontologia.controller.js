const db = require('../config/conexion');

const obtenerOdontologia = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM evaluacion_odontologica;', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const obtenerOdontologiaPorid = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM evaluacion_odontologica WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
} 

const crearOdontologia = (user) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO evaluacion_odontologica SET ?', user, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }); 
  });
}

const actualizarOdontologia = (id, user) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE evaluacion_odontologica SET ? WHERE id = ?', [user, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const borrarOdontologia = (id) => {
  return new Promise((resolve, reject) => {
    console.log('Intentando eliminar carrera con ID:', id); // Agregar registro para depuración
    db.query('DELETE FROM evaluacion_odontologica WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al Enfermedad carrera:', err); // Agregar registro de error
        reject(err);
      }
      resolve(results);
    });
  });
}


module.exports = {
  obtenerOdontologia,
  obtenerOdontologiaPorid, 
  crearOdontologia,
  actualizarOdontologia,
  borrarOdontologia
}