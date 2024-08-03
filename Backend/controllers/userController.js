const User = require('../models/User');

exports.getUserPurchases = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('purchases');
        res.json(user.purchases);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
