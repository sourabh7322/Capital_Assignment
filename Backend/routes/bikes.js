const express = require('express');
const Bikerouter = express.Router();
const Bike = require('../models/Bike');
const auth = require('../middleware/auth');

// Create a new bike
Bikerouter.post('/', auth, async (req, res) => {
    try {
        const newBike = new Bike({ ...req.body, userId: req.user.id });
        const bike = await newBike.save();
        res.json(bike);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get all unsold bikes
Bikerouter.get('/', async (req, res) => {
    try {
        const bikes = await Bike.find({ status: 'unsold' });
        res.json(bikes);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get user-specific bikes
Bikerouter.get('/user', auth, async (req, res) => {
    try {
        const bikes = await Bike.find({ userId: req.user.id });
        res.json(bikes);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = Bikerouter;
