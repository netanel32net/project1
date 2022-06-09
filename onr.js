const mongoose = require("mongoose");

const onr = new mongoose.Schema({
    ownerfirstName: {
        type: String,
        required: true
    },
    ownerlastName: {
            type: String,
            required: true  
    },
    ownerEmail: {
        type: String,
        lowercase: true
    },
    ownerAge: {
        type: Number,
        min:1,
        max:99
    },
    VeterinarId: mongoose.SchemaTypes.ObjectId,
    PetsArr: [mongoose.SchemaTypes.ObjectId]

});
module.exports = mongoose.model("onr", onr);