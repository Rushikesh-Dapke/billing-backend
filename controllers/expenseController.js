const Expense = require('./models/Expense');

// Add a new expense
exports.addExpense = async (req, res) => {
    try {
        const { type, amount, description, expenseDate } = req.body;
        const expense = new Expense({ type, amount, description, expenseDate });
        await expense.save();
        res.status(201).json({ message: "Expense added successfully", expense });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all expenses
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
