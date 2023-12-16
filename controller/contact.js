const { check, validationResult } = require('express-validator');
const {createMessage} = require('./messageInfo');

const displayForm = (req, res) => {
    res.render('contact', { errors: '' });
};



const validateForm = [

    check('name').notEmpty().withMessage('Name is required'),
    check('surname').notEmpty().withMessage('Surname is required'),
    check('phone').notEmpty().withMessage('Phone number is required'),
    check('email').isEmail().withMessage('Invalid Email Address'),
    check('message').notEmpty().withMessage('Message is required'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('contact', { errors: errors.mapped() });
        } else {
            console.log(req.body);
            createMessage(req, res); // Pass req and res to createMessage function
        }
    }
];

module.exports = { displayForm, validateForm };
