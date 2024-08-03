const express = require('express');
const router = express.Router();
const Bike = require('../models/Bike');
const Car = require('../models/Car');
const House = require('../models/House');
const Laptop = require('../models/Laptop');
const Mobile = require('../models/Mobile');
const Item = require('../models/Item');

// Search across all categories
router.get('/', async (req, res) => {
    const { query } = req;

    if (!query.search) {
        return res.status(400).json({ msg: 'Search query is required' });
    }

    try {
        const searchQuery = {
            $or: [
                { productName: { $regex: query.search, $options: 'i' } },
                { brandName: { $regex: query.search, $options: 'i' } },
                { description: { $regex: query.search, $options: 'i' } }
            ]
        };

        const bikes = await Bike.find(searchQuery);
        const cars = await Car.find(searchQuery);
        const houses = await House.find(searchQuery);
        const laptops = await Laptop.find(searchQuery);
        const mobiles = await Mobile.find(searchQuery);
        const items = await Item.find(searchQuery);

        res.json({ bikes, cars, houses, laptops, mobiles, items });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
