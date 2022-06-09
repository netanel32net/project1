const mongoose = require("mongoose");
const pet = require("./pet.js");

try {
    mongoose.connect("mongodb://localhost:27017/pet");
    console.log('connected');
    console.log('hello debugger!');
} catch(e) {
    console.log(e);
}

async function createPet() {
    const newpet = new pet({
            petType: "dog",
            firstName: "snoop dog",
            eat: "halcohol",
            Age: 2
    });
    await newpet.save();
    console.log(newpet);
}
// createPet();