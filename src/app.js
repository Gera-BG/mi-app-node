require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
//const HOST =  '0.0.0.0';

app.use(express.json());
app.use('/api/v1', routes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log(`Accede a la API en http://localhost:${PORT}/api/v1`);
  console.log(`Ejemplo de solicitud para obtener la tasa de cambio: http://localhost:${PORT}/api/v1/currency?from=USD&to=EUR`);
  console.log(`Ejemplo de solicitud para obtener el clima: http://localhost:${PORT}/api/v1/weather?lat=19.54&lon=-96.91`);
  console.log(`Ejemplo de solicitud para obtener el resumen de viaje: http://localhost:${PORT}/api/v1/travel?from=New York&to=London`);
  console.log(`Ejemplo de solicitud para obtener todos los clientes: http://localhost:${PORT}/api/v1/customers`);
});