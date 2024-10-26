const Customer = require('../models/customer');

// Add a new customer
exports.addCustomer = async (req, res) => {
    try {
        const { name, contact, address, gstNumber } = req.body;
        const customer = new Customer({ name, contact, address, gstNumber });
        await customer.save();
        res.status(201).json({ message: "Customer added successfully", customer });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all customers
exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a customer
exports.updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ message: "Customer updated", updatedCustomer });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        await Customer.findByIdAndDelete(id);
        res.json({ message: "Customer deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
