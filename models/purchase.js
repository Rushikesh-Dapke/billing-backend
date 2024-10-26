const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    supplier: { type: String, required: true },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        unitPrice: { type: Number, required: true },
        gstAmount: { type: Number, required: true },
    }],
    totalAmount: { type: Number, required: true },
    gstTotal: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
