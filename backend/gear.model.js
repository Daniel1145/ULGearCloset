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
    stack: {
        type: Number
    },
    drop: {
        type: Number
    }
})
let Shoes = mongoose.model("Shoes", tentsSchema, "shoes")

module.exports = {Backpacks: Backpacks, Tents: Tents, Shoes: Shoes};