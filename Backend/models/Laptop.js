const mongoose = require('mongoose');

const LaptopSchema = new mongoose.Schema({
    productImages: [String],
    productName: { type: String, required: true },
    brandName: { type: String, required: true },
    yearOfPurchase: Number,
    model: String,
    physicalCondition: String,
    description: String,
    price: { type: Number, required: true },
    location: String,
    postedOn: String,
    status: { type: String, default: 'unsold' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Laptop', LaptopSchema);
