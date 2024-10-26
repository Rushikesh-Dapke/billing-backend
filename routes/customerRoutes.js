const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const authenticateToken = require('../middleware/authMiddleware'); // Optional: Authentication middleware

// Add a new customer
router.post('/', authenticateToken, customerController.addCustomer);

// Get all customers
router.get('/', authenticateToken, customerController.getCustomers);

// Update a customer by ID
router.put('/:id', authenticateToken, customerController.updateCustomer);

// Delete a customer by ID
router.delete('/:id', authenticateToken, customerController.deleteCustomer);

module.exports = router;
