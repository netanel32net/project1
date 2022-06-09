const mongoose = require("mongoose");
// const pet = require("./pets");
const onr = require("./onr.js");

try {
    mongoose.connect("mongodb://localhost:27017/pet");
    console.log('connected');
    console.log('hello debugger!');
} catch(e) {
    console.log(e);
}

async function updatePet(findObjectById){
    const petToChange = await onr.findById(findObjectById);
    console.log(petToChange);
    petToChange.ownerEmail = "natiamram@gogo-shop.co.il";
    await petToChange.save();
    console.log(petToChange);
}

// updatePet("629f93c21edce163d0bed9e3"); //need to change ID

