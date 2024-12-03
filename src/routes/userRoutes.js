const express = require('express');
const { initApi, getUsers, addUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', initApi);
router.get('/users', getUsers);
router.post('/user', addUser);

module.exports = router;
