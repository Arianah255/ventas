const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  subtotal: { type: Number, required: true },
  iva: { type: Number, required: true },
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Sale = mongoose.model('Sale', saleSchema);
module.exports = Sale;
