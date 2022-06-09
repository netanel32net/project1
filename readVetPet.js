const mongoose = require("mongoose");
const onr = require("./onr.js"); // Schema onr
const pet = require("./pet.js"); //Schema pet
const veterinar = require("./veterinar.js"); // Schema veterinar

try {
    mongoose.connect("mongodb://localhost:27017/pet");
    console.log('connected');
    console.log('hello debugger!');
} catch(e) {
    console.log(e);
}finally {
    
    async function updatePet(findObject) {
        const productsToChange = await onr.find(findObject);
        productsToChange.forEach(async(element) => {
            let singleProduct = await onr.findById(element.id);
            singleProduct.ownerfirstName = "apple";
            await singleProduct.save();
            console.log('it work');
        });
        console.log('change all the names');
    }
}
    updatePet({ownerfirstName: "nati"});