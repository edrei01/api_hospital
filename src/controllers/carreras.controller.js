const db = require('../config/conexion');

const obtenerUser = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM usuarios;', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const obtenerUsersPorid = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
} 

const crearUser = (user) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO usuarios SET ?', user, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }); 
  });
}

const actualizarUser = (id, user) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE usuarios SET ? WHERE id = ?', [user, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const borrarUser = (id) => {
  return new Promise((resolve, reject) => {
    console.log('Intentando eliminar carrera con ID:', id); // Agregar registro para depuración
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al eliminar carrera:', err); // Agregar registro de error
        reject(err);
      }
      resolve(results);
    });
  });
}


module.exports = {
  obtenerUser,
  obtenerUsersPorid, 
  crearUser,
  actualizarUser,
  borrarUser
}