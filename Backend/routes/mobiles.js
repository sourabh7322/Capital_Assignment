const express = require('express');
const router = express.Router();
const Mobile = require('../models/Mobile');
const auth = require('../middleware/auth');

// Create a new mobile
router.post('/', auth, async (req, res) => {
    try {
        const newMobile = new Mobile({ ...req.body, userId: req.user.id });
        const mobile = await newMobile.save();
        res.json(mobile);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get all unsold mobiles
router.get('/', async (req, res) => {
    try {
        const mobiles = await Mobile.find({ status: 'unsold' });
        res.json(mobiles);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get user-specific mobiles
router.get('/user', auth, async (req, res) => {
    try {
        const mobiles = await Mobile.find({ userId: req.user.id });
        res.json(mobiles);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
