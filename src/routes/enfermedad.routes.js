const express = require('express');
const router = express.Router();
const controlador = require('../controllers/enfermedad.controller');

router.get('/obtenerEnfermedad/', async (req, res) => {
  const carrera = await controlador.obtenerEnfermedad();
  res.json(carrera);
});

router.get('/obtenerEnfermedad/:id', async (req, res) => {
  const carreraId = req.params.id;
  const carrera = await controlador.obtenerEnfermedadPorid(carreraId);

  if (carrera) {
    res.json(carrera);
  } else {
    res.status(404).json({ message: 'Antecedente no encontrado' });
  }
});

router.post('/crearEnfermedad/', async (req, res) => {
  const user = req.body;
  await controlador.crearEnfermedad(user);
  res.json({message: 'Enfermedad creado'});
}); 

router.put('/actualizarEnfermedad/:id', async (req, res) => {
  const user = req.body;
  await controlador.actualizarEnfermedad(req.params.id, user);
  res.json({ message: 'Enfermedad actualizado' });
});


router.delete('/borrarEnfermedad/:id', async (req, res) => {
  await controlador.borrarEnfermedad(req.params.id);
  res.json({ message: 'Enfermedad borrado' });
});

module.exports = router;