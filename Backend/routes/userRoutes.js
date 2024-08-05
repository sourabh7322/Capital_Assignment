const express = require('express');
const router = express.Router();
 const auth = require('../middleware/authMiddleware');
const { getUserPurchases } = require('../controllers/userController');

router.get('/purchases',auth,  getUserPurchases);

module.exports = router;
