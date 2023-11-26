const db = require('../config/conexion');

const obtenerAntecedentes = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM antecedentes;', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const obtenerAntecedentesPorid = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM antecedentes WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
} 

const crearAntecedentes = (user) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO antecedentes SET ?', user, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }); 
  });
}

const actualizarAntecedentes = (id, user) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE antecedentes SET ? WHERE id = ?', [user, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const borrarAntecedentes = (id) => {
  return new Promise((resolve, reject) => {
    console.log('Intentando eliminar carrera con ID:', id); // Agregar registro para depuración
    db.query('DELETE FROM antecedentes WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al antecedentes carrera:', err); // Agregar registro de error
        reject(err);
      }
      resolve(results);
    });
  });
}


module.exports = {
  obtenerAntecedentes,
  obtenerAntecedentesPorid, 
  crearAntecedentes,
  actualizarAntecedentes,
  borrarAntecedentes
}