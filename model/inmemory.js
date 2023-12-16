const Messages = require('./messages');


// Initialize Msgs array
let Msgs = [];

// Creating a function to add messages
const addMessages = (rawObject) => {

    // Id automation
    let maxId = 0;
    Msgs.forEach((msg) => {
        if (maxId < msg.id) {
            maxId = msg.id;
        }
    });


    const newMessage = new Messages({
        id: maxId + 1,
        name: rawObject.name,
        surname: rawObject.surname,
        phone: rawObject.phone,
        email: rawObject.email,
        message: rawObject.message,
    });

    Msgs.push(newMessage);
};

module.exports = { Msgs, addMessages };
