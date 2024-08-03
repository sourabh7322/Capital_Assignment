const express = require('express');
const router = express.Router();
const House = require('../models/House');
const auth = require('../middleware/auth');

// Create a new house
router.post('/', auth, async (req, res) => {
    try {
        const newHouse = new House({ ...req.body, userId: req.user.id });
        const house = await newHouse.save();
        res.json(house);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get all unsold houses
router.get('/', async (req, res) => {
    try {
        const houses = await House.find({ status: 'unsold' });
        res.json(houses);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get user-specific houses
router.get('/user', auth, async (req, res) => {
    try {
        const houses = await House.find({ userId: req.user.id });
        res.json(houses);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
