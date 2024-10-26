const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
    method: { type: String, enum: ['cash', 'bank_transfer', 'credit_card'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
