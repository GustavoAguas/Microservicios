const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  axios.get('http://localhost:3002/data')
    .then(response => {
      res.json({
        message: 'Microservicio 1',
        dataFromMicroservicio2: response.data
      });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener datos del Microservicio 2' });
    });
});

app.listen(port, () => {
  console.log(`Microservicio 1 escuchando en http://localhost:${port}`);
});
