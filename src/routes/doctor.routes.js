const express = require('express');
const router = express.Router();
const controlador = require('../controllers/doctor.controller');

router.get('/obtenerDoctor/', async (req, res) => {
  const carrera = await controlador.obtenerDoctor();
  res.json(carrera);
});

router.get('/obtenerDoctor/:id', async (req, res) => {
  const carreraId = req.params.id;
  const carrera = await controlador.obtenerDoctorPorid(carreraId);

  if (carrera) {
    res.json(carrera);
  } else {
    res.status(404).json({ message: 'User no encontrado' });
  }
});

router.post('/crearDoctor/', async (req, res) => {
  const user = req.body;
  await controlador.crearDoctor(user);
  res.json({message: 'Usuario creado'});
}); 

router.put('/actualizarDoctor/:id', async (req, res) => {
  const user = req.body;
  await controlador.actualizarDoctor(req.params.id, user);
  res.json({ message: 'Usuario actualizado' });
});


router.delete('/borrarDoctor/:id', async (req, res) => {
  await controlador.borrarDoctor(req.params.id);
  res.json({ message: 'User borrado' });
});

module.exports = router;