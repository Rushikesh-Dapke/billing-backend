const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        unitPrice: { type: Number, required: true },
        gstAmount: { type: Number, required: true },
    }],
    totalAmount: { type: Number, required: true },
    gstTotal: { type: Number, required: true },
    saleDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Sale', saleSchema);
