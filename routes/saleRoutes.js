const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');

// Definición de las rutas
router.post('/sales', saleController.createSale);
router.get('/sales', saleController.getAllSales);

module.exports = router;
