const mongoose = require("mongoose");
const veterinar = require("./veterinar.js");

try {
    mongoose.connect("mongodb://localhost:27017/pet");
    console.log('connected');
    console.log('hello debugger!');
} catch(e) {
    console.log(e);
}

async function createvet() {
    const newvet = new veterinar({
            firstName: "yosi",
            lastName: "levi",
            phone: "056568989"
    });
    await newvet.save();
    console.log(newvet);
}
//  createvet();