const express = require('express');
const router = express.Router();

const indexController = require('./indexController');

/* GET home page. */
router.get('/', indexController.list);

module.exports = router;
