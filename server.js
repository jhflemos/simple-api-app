const express = require('express');
const app = express();
const router = express.Router();

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Define API routes on router
router.get('/orders', (req, res) => {
  const orders = [
    { id: 1, item: 'Laptop', quantity: 1 },
    { id: 2, item: 'Phone', quantity: 2 },
    { id: 3, item: 'Keyboard', quantity: 3 }
  ];
  res.json(orders);
});

router.get('/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const order = { id: orderId, item: 'Monitor', quantity: 1 };
  res.json(order);
});

// Mount router at /api
app.use('/', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Orders API running on port ${PORT}`);
});
