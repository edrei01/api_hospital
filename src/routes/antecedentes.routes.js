const express = require('express');
const router = express.Router();
const controlador = require('../controllers/antecedentes.controller');

router.get('/obtenerAntecedentes/', async (req, res) => {
  const carrera = await controlador.obtenerAntecedentes();
  res.json(carrera);
});

router.get('/obtenerAntecedentes/:id', async (req, res) => {
  const carreraId = req.params.id;
  const carrera = await controlador.obtenerAntecedentesPorid(carreraId);

  if (carrera) {
    res.json(carrera);
  } else {
    res.status(404).json({ message: 'Antecedente no encontrado' });
  }
});

router.post('/crearAntecedentes/', async (req, res) => {
  const user = req.body;
  await controlador.crearAntecedentes(user);
  res.json({message: 'Antecedentes creado'});
}); 

router.put('/actualizarAntecedentes/:id', async (req, res) => {
  const user = req.body;
  await controlador.actualizarAntecedentes(req.params.id, user);
  res.json({ message: 'Antecedentes actualizado' });
});


router.delete('/borrarAntecedentes/:id', async (req, res) => {
  await controlador.borrarAntecedentes(req.params.id);
  res.json({ message: 'Antecedentes borrado' });
});

module.exports = router;