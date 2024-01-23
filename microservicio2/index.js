const express = require('express');
const app = express();
const port = 3002;

app.get('/data', (req, res) => {
  res.json({
    message: 'Datos del Microservicio 2',
    data: 'Información importante del Microservicio 2'
  });
});

app.listen(port, () => {
  console.log(`Microservicio 2 escuchando en http://localhost:${port}`);
});
