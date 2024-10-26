const Sale = require('./models/Sale');
const Product = require('./models/Product');

// Add a new sale
exports.addSale = async (req, res) => {
    try {
        const { customer, items } = req.body;
        
        let totalAmount = 0;
        let gstTotal = 0;
        
        for (const item of items) {
            const product = await Product.findById(item.product);
            const gstAmount = (product.gstRate / 100) * item.quantity * product.price;
            totalAmount += (item.quantity * product.price) + gstAmount;
            gstTotal += gstAmount;
        }

        const sale = new Sale({ customer, items, totalAmount, gstTotal });
        await sale.save();
        res.status(201).json({ message: "Sale recorded successfully", sale });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all sales
exports.getSales = async (req, res) => {
    try {
        const sales = await Sale.find().populate('customer').populate('items.product');
        res.json(sales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
