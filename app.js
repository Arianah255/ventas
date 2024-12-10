const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const saleRoutes = require('./routes/saleRoutes');
require('dotenv').config(); // Importar dotenv para usar variables de entorno

const app = express();

// Middleware
app.use(bodyParser.json());

// Conexión a MongoDB Atlas (sin las opciones deprecated)
mongoose.connect('mongodb+srv://stbmydp4:Stbmydp12@cluster0.awtdw.mongodb.net/ApiventaVentas?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((error) => console.error('Error al conectar a MongoDB Atlas:', error));

// Rutas
app.use('/api/ventas', saleRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000; // Permite usar un puerto dinámico (útil para despliegues)
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
