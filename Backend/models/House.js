const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
    image: [String],
    price: { type: Number, required: true },
    address: String,
    postDate: String,
    sellerName: String,
    memberSince: String,
    phone: String,
    state: String,
    bathrooms: Number,
    bedrooms: Number,
    furnished: String,
    category: String,
    floor: Number,
    carParking: Number,
    description: String,
    status: { type: String, default: 'unsold' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('House', HouseSchema);
