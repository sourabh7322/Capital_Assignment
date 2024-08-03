const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const auth = require('../middleware/auth');

// Create a new car
router.post('/', auth, async (req, res) => {
    try {
        const newCar = new Car({ ...req.body, userId: req.user.id });
        const car = await newCar.save();
        res.json(car);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get all unsold cars
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find({ status: 'unsold' });
        res.json(cars);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get user-specific cars
router.get('/user', auth, async (req, res) => {
    try {
        const cars = await Car.find({ userId: req.user.id });
        res.json(cars);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
