const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
const port = 3005;

// Set up view engine and middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false })); // Deprecated in newer versions of Express
app.use(express.json());

// Use the routes
app.use(routes);

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error("Unable to listen on port " + port);
    } else {
        console.log("Server listening on port " + port);
    }
});
