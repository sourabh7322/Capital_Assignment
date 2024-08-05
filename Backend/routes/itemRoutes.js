const express = require('express');
const router = express.Router();
 const auth = require('../middleware/authMiddleware');
const { createItem, getItems, getUserItems } = require('../controllers/itemController');

router.post('/',auth, createItem);
router.get('/', getItems);
router.get('/user',auth,  getUserItems);

module.exports = router;
