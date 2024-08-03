const express = require('express');
const router = express.Router();
const Laptop = require('../models/Laptop');
const auth = require('../middleware/auth');

// Create a new laptop
router.post('/', auth, async (req, res) => {
    try {
        const newLaptop = new Laptop({ ...req.body, userId: req.user.id });
        const laptop = await newLaptop.save();
        res.json(laptop);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get all unsold laptops
router.get('/', async (req, res) => {
    try {
        const laptops = await Laptop.find({ status: 'unsold' });
        res.json(laptops);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get user-specific laptops
router.get('/user', auth, async (req, res) => {
    try {
        const laptops = await Laptop.find({ userId: req.user.id });
        res.json(laptops);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
