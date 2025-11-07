const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Health check endpoint for ALB
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Sample route
app.get('/orders', (req, res) => {
  const orders = [
    { id: 1, item: 'Laptop', quantity: 1 },
    { id: 2, item: 'Phone', quantity: 2 },
    { id: 3, item: 'Keyboard', quantity: 3 }
  ];
  res.json(orders);
});

// Get single order by ID
app.get('/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const order = { id: orderId, item: 'Monitor', quantity: 1 };
  res.json(order);
});

app.listen(PORT, () => {
  console.log(`Orders API running on port ${PORT}`);
});
