const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const backpacksRoutes = express.Router();
const PORT = 4000;

let Backpacks = require('./gear.model');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/gear', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

backpacksRoutes.route('/').get((req, res) => {
    Backpacks.find((err, backpack) => {
        if (err) {
            console.log(err);
        } else {
            res.json(backpack);
        }
    });
});

backpacksRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Backpacks.findById(id, (err, backpack) => {
        res.json(backpack);
    })
});

backpacksRoutes.route('/add').post((req, res) => {
    let backpack = new Backpacks(req.body);
    backpack.save()
        .then(backpack => {
            res.status(200).json({'backpack': 'backpack added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new backpack failed');
        })
});

backpacksRoutes.route('/update/:id').post((req, res) => {
    Backpacks.findById(req.params.id, (err, backpack) => {
        if (!backpack)
            res.status(404).send('backpack not found');
        else
            backpack.name = req.body.name;
            backpack.weight = req.body.weight;
            backpack.weight_units = req.body.weight_units;
            backpack.price = req.body.price;
            backpack.material = req.body.material;
            backpack.volume = req.body.volume;
            backpack.frame = req.body.frame;
            backpack.hipbelt = req.body.hipbelt;
            backpack.href = req.body.href;

            backpack.save().then(backpack => {
                res.status(200).json('Backpack updated');
            })
            .catch(err => {
                res.status(400).send("Updated failed");
            })
    });
})

app.use('/backpacks', backpacksRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});