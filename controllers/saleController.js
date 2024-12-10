const Sale = require('../models/saleModel');

exports.createSale = async (req, res) => {
  const { clientName, product, quantity, pricePerUnit, ivaRate } = req.body;

  const subtotal = quantity * pricePerUnit;
  const iva = (subtotal * ivaRate) / 100;
  const total = subtotal + iva;

  try {
    const newSale = new Sale({
      clientName,
      product,
      quantity,
      pricePerUnit,
      subtotal,
      iva,
      total
    });

    await newSale.save();
    res.status(201).json({ message: 'Sale created successfully', sale: newSale });
  } catch (error) {
    res.status(500).json({ message: 'Error creating sale', error: error.message });
  }
};

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sales', error: error.message });
  }
};
