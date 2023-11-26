const express = require('express');
const router = express.Router();
const controlador = require('../controllers/pago.controller');

router.get('/obtenerPago/', async (req, res) => {
  const carrera = await controlador.obtenerPago();
  res.json(carrera);
});

router.get('/obtenerPago/:id', async (req, res) => {
  const carreraId = req.params.id;
  const carrera = await controlador.obtenerPagoPorid(carreraId);

  if (carrera) {
    res.json(carrera);
  } else {
    res.status(404).json({ message: 'Pago no encontrado' });
  }
});

router.post('/crearPago/', async (req, res) => {
  const user = req.body;
  await controlador.crearPago(user);
  res.json({message: 'Pago creado'});
}); 

router.put('/actualizarPago/:id', async (req, res) => {
  const user = req.body;
  await controlador.actualizarPago(req.params.id, user);
  res.json({ message: 'Pago actualizado' });
});


router.delete('/borrarPago/:id', async (req, res) => {
  await controlador.borrarPago(req.params.id);
  res.json({ message: 'Pago borrado' });
});

module.exports = router;