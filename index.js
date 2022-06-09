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
// create Client
async function createOnr() {
    const newOnw = new onr({
            ownerfirstName: "netanel",
            ownerlastName: "amram",
            ownerEmail: "gogoshop2014@gmail.com",
            ownerAge: 33,
            VeterinarId: "629fa8e989c9483671fd6b82",
            PetsArr: ["629fa2dbac5d60f1bffa93d2", "629fa53b035128401c8132b5","629fa2491ed115f7ba3e73dd"]
    });
    await newOnw.save();
    console.log(newOnw);
}
// createOnr();