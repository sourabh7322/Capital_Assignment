const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['sold', 'unsold'],
        default: 'unsold',
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    productImages: [{
        type: String,
    }],
    description: {
        type: String,
    },
    location: {
        type: String,
    }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
