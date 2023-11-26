const express = require('express');
const router = express.Router();
const controlador = require('../controllers/carreras.controller');

router.get('/obtenerUser/', async (req, res) => {
  const carrera = await controlador.obtenerUser();
  res.json(carrera);
});

router.get('/obtenerUser/:id', async (req, res) => {
  const carreraId = req.params.id;
  const carrera = await controlador.obtenerUsersPorid(carreraId);

  if (carrera) {
    res.json(carrera);
  } else {
    res.status(404).json({ message: 'User no encontrado' });
  }
});

router.post('/crearUser/', async (req, res) => {
  const user = req.body;
  await controlador.crearUser(user);
  res.json({message: 'Usuario creado'});
}); 

router.put('/actualizarUser/:id', async (req, res) => {
  const user = req.body;
  await controlador.actualizarUser(req.params.id, user);
  res.json({ message: 'Usuario actualizado' });
});


router.delete('/borrarUser/:id', async (req, res) => {
  await controlador.borrarUser(req.params.id);
  res.json({ message: 'User borrado' });
});

module.exports = router;