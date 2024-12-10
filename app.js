const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const saleRoutes = require('./routes/saleRoutes');
require('dotenv').config(); // Asegúrate de que tu archivo .env esté configurado

const app = express();

// Middleware
app.use(bodyParser.json());

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://stbmydp4:Stbmydp12@cluster0.awtdw.mongodb.net/ApiventaVentas?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((error) => console.error('Error al conectar a MongoDB Atlas:', error));

// Rutas
app.use('/api', saleRoutes); // Asegúrate de que las rutas se registren correctamente con el prefijo '/api'

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
