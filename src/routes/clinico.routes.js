const express = require('express');
const router = express.Router();
const controlador = require('../controllers/clinico.controller');

router.get('/obtenerClinico/', async (req, res) => {
  const carrera = await controlador.obtenerClinico();
  res.json(carrera);
});

router.get('/obtenerClinico/:id', async (req, res) => {
  const carreraId = req.params.id;
  const carrera = await controlador.obtenerClinicoPorid(carreraId);

  if (carrera) {
    res.json(carrera);
  } else {
    res.status(404).json({ message: 'clinico no encontrado' });
  }
});

router.post('/crearClinico/', async (req, res) => {
  const user = req.body;
  await controlador.crearClinico(user);
  res.json({message: 'Clinico creado'});
}); 

router.put('/actualizarClinico/:id', async (req, res) => {
  const user = req.body;
  await controlador.actualizarClinico(req.params.id, user);
  res.json({ message: 'Clinico actualizado' });
});


router.delete('/borrarClinico/:id', async (req, res) => {
  await controlador.borrarClinico(req.params.id);
  res.json({ message: 'Clinico borrado' });
});

module.exports = router;