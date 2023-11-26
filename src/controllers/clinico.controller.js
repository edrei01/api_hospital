const db = require('../config/conexion');

const obtenerClinico = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM historial_clinico;', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const obtenerClinicoPorid = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM historial_clinico WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
} 

const crearClinico = (user) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO historial_clinico SET ?', user, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }); 
  });
}

const actualizarClinico = (id, user) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE historial_clinico SET ? WHERE id = ?', [user, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const borrarClinico = (id) => {
  return new Promise((resolve, reject) => {
    console.log('Intentando eliminar carrera con ID:', id); // Agregar registro para depuración
    db.query('DELETE FROM historial_clinico WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al Enfermedad carrera:', err); // Agregar registro de error
        reject(err);
      }
      resolve(results);
    });
  });
}


module.exports = {
  obtenerClinico,
  obtenerClinicoPorid, 
  crearClinico,
  actualizarClinico,
  borrarClinico
}