const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
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
    featured: Boolean,
    status: { type: String, default: 'unsold' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Bike', BikeSchema);
