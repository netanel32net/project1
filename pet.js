const mongoose = require("mongoose");

const pet = new mongoose.Schema({
    petType: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    eat: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        min:1,
        max:99,
        required: true
    }

});
module.exports = mongoose.model("pet", pet);