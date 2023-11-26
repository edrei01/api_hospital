const express = require('express');
const router = express.Router();
const controlador = require('../controllers/Odontologia.controller');

router.get('/obtenerOdontologia/', async (req, res) => {
  const carrera = await controlador.obtenerOdontologia();
  res.json(carrera);
});

router.get('/obtenerOdontologia/:id', async (req, res) => {
  const carreraId = req.params.id;
  const carrera = await controlador.obtenerOdontologiaPorid(carreraId);

  if (carrera) {
    res.json(carrera);
  } else {
    res.status(404).json({ message: 'Antecedente no encontrado' });
  }
});

router.post('/crearOdontologia/', async (req, res) => {
  const user = req.body;
  await controlador.crearOdontologia(user);
  res.json({message: 'Odontologia creado'});
}); 

router.put('/actualizarOdontologia/:id', async (req, res) => {
  const user = req.body;
  await controlador.actualizarOdontologia(req.params.id, user);
  res.json({ message: 'Odontologia actualizado' });
});


router.delete('/borrarOdontologia/:id', async (req, res) => {
  await controlador.borrarOdontologia(req.params.id);
  res.json({ message: 'Odontologia borrado' });
});

module.exports = router;