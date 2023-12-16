const { Msgs } = require('../model/inmemory');
const { addMessages } = require('../model/inmemory');

const displayMessages = (req, res) => {
    res.render('messageInfo', { Msgs }); // Adjusted spacing for consistency
};


const createMessage = (req, res) => {
    try {
        addMessages({
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            email: req.body.email,
            message: req.body.message
        });
    } catch (error) {
        console.error(error);
    }

    res.redirect('/messages'); // Assuming you want to redirect to '/messages'
};


module.exports = { displayMessages, createMessage };
