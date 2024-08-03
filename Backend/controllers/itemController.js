const Item = require('../models/Item');

exports.createItem = async (req, res) => {
    const { name, price } = req.body;

    try {
        const newItem = new Item({
            name,
            price,
            seller: req.user.id,
        });

        const item = await newItem.save();

        res.json(item);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find({ status: 'unsold' });
        res.json(items);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.getUserItems = async (req, res) => {
    try {
        const items = await Item.find({ seller: req.user.id });
        res.json(items);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
