const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Backpacks = new Schema({
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

module.exports = mongoose.model('Backpacks', Backpacks, "backpacks");