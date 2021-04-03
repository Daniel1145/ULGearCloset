const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Backpacks = new Schema({
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
    material: {
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
    }
});

module.exports = mongoose.model('Backpacks', Backpacks, "backpacks");