const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    expenseDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
