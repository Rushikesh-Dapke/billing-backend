const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    type: { type: String, enum: ['debit', 'credit'], required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    transactionDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Ledger', ledgerSchema);
