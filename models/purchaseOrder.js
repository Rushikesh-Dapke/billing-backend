const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
    supplier: { type: String, required: true },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
    }],
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    orderDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);
