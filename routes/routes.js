const express = require('express');
const router = express.Router();

// Importing controller components
const { displayForm, validateForm } = require('../controller/contact');
const { displayHome } = require('../controller/home');
const { displayMessages, createMessage } = require('../controller/messageInfo');



// Define routes
router.get('/', displayHome);
router.get('/contact', displayForm);
router.post('/contact', validateForm);
router.get('/messages', displayMessages);



module.exports = router;
