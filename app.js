const express = require('express');
const app = express();
const userRoutes = require('./src/routes/carrera.routes');
const doctorRoutes = require('./src/routes/doctor.routes');
const antecedentesRoutes = require('./src/routes/antecedentes.routes')
const enfermedadRoutes = require('./src/routes/enfermedad.routes')
const odontologiaRoutes = require('./src/routes/odontologia.routes')
const clinicoRoutes = require('./src/routes/clinico.routes')
const pagoRoutes = require('./src/routes/pago.routes')
const citasRoutes = require('./src/routes/citas.routes')

app.use(express.json());
app.use('/users', userRoutes);
app.use('/doctor', doctorRoutes)
app.use('/antecedentes',antecedentesRoutes)
app.use('/enfermedad',enfermedadRoutes)
app.use('/odontologia',odontologiaRoutes)
app.use('/clinico',clinicoRoutes)
app.use('/pago',pagoRoutes)
app.use('/cita',citasRoutes)

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});