require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database'); // Database connection
const authRoutes = require('./routes/authRoute'); // Authentication routes
const customerRoutes = require('./routes/customerRoutes'); // Customer routes
const productRoutes = require('./routes/productRoutes'); // Product routes



// Add more route imports as needed

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/DemoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes); // Authentication routes (login/signup)
app.use('/api/customers', customerRoutes); // Customer management routes
app.use('/api/products', productRoutes); // Product management routes
// Add other routes for sale, purchase, payment, etc.

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the GST Billing Application API');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An internal server error occurred' });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
