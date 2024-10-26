const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authenticateToken = require('../middleware/authMiddleware'); // Optional: Authentication middleware

// Add a new product
router.post('/', authenticateToken, productController.addProduct);

// Get all products
router.get('/', authenticateToken, productController.getProducts);

// Update a product by ID
router.put('/:id', authenticateToken, productController.updateProduct);

// Delete a product by ID
router.delete('/:id', authenticateToken, productController.deleteProduct);

module.exports = router;
