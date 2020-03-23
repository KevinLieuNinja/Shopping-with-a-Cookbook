// IMPORTS
const express = require('express');
const cors = require('cors');

//INSTANTIATE AN EXPRESS INSTANCE
const app = express();

// STARTING UP MONGOOSE TO CONNECT WITH MONGODB
require('./server/config/mongoose.config');

// SETTING UP CORS TO ALLOW REACT TO MAKE REQUESTS TO OUR BACK END
app.use(cors())

// ALLOWING EXPRESS TO ACCEPT POST REQUESTS/ACCEPT BODY OF INFORMATION
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TAKING OUR EXPRESS INSTANCE AND ATTACHING TO OUR ROUTES
require('./server/routes/grocery.routes')(app);

// START OUR EXPRESS SERVER
app.listen(8000, () => {
    console.log("Listening at Port 8000")
});
