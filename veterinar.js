const mongoose = require("mongoose");

const veterinar = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }

});
module.exports = mongoose.model("veterinar", veterinar);