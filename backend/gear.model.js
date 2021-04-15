const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let backpacksSchema = new Schema({
    manufacturer: {
        type: String
    },
    name: {
        type: String
    },
    weight: {
        type: Number
    },
    weight_units: {
        type: String
    },
    price: {
        type: Number
    },
    href: {
        type: String
    },
    materials: {
        type: String
    },
    volume: {
        type: Number
    },
    frame: {
        type: String
    },
    hipbelt: {
        type: String
    },
    max_load: {
        type: Number
    }
});
let Backpacks = mongoose.model("Backpacks", backpacksSchema, "backpacks");
let BackpackSuggestions = mongoose.model("BackpackSuggestions", backpacksSchema, "backpacksuggestions")

let tentsSchema = new Schema({
    manufacturer: {
        type: String
    },
    name: {
        type: String
    },
    weight: {
        type: Number
    },
    weight_units: {
        type: String
    },
    price: {
        type: Number
    },
    href: {
        type: String
    },
    wall: {
        type: String
    },
    material: {
        type: String
    },
    min_stakes: {
        type: Number
    },
    max_stakes: {
        type: Number
    },
    max_people: {
        type: Number
    },
    length: {
        type: Number
    },
    floor_area: {
        type: Number
    },
    freestanding: {
        type: String
    }
})
let Tents = mongoose.model("Tents", tentsSchema, "tents")
let TentSuggestions = mongoose.model("TentSuggestions", tentsSchema, "tentsuggestions")

let shoesSchema = new Schema({
    manufacturer: {
        type: String
    },
    name: {
        type: String
    },
    weight: {
        type: Number
    },
    weight_units: {
        type: String
    },
    price: {
        type: Number
    },
    href: {
        type: String
    },
    type: {
        type: String
    },
    waterproof: {
        type: String
    },
    stack: {
        type: Number
    },
    drop: {
        type: Number
    }
})
let Shoes = mongoose.model("Shoes", shoesSchema, "shoes")
let ShoeSuggestions = mongoose.model("ShoeSuggestions", shoesSchema, "shoesuggestions")

module.exports = {Backpacks, Tents, Shoes, BackpackSuggestions, TentSuggestions, ShoeSuggestions};