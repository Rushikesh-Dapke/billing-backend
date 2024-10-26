const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://codelangsaurangabad:EtSRU9oUHT5v8YXa@cluster0.9ph8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected!");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;