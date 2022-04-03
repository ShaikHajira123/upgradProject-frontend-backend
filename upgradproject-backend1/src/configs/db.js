const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://ShaikHajira1234:hajira1234@upgrad.oayty.mongodb.net/UpGrad?retryWrites=true&w=majority");
};

