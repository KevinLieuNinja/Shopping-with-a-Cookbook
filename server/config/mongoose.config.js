const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/grocery_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MONGOOSE CONNECTED TO DB"))
    .catch(() => console.log("ERR CONNECTING TO MONGODB", err));