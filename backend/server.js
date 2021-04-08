const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const backpacksRoutes = express.Router();
const tentsRoutes = express.Router();
const shoesRoutes = express.Router();
const PORT = 4000;
const {Backpacks, Tents, Shoes} = require('./gear.model');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/gear', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

backpacksRoutes.route('/').get((req, res) => {
    Backpacks.find((err, backpacks) => {
        if (err) {
            console.log(err);
        } else {
            res.json(backpacks);
        }
    });
});

tentsRoutes.route('/').get((req, res) => {
    Tents.find((err, tents) => {
        if (err) {
            console.log(err);
        } else {
            res.json(tents);
        }
    });
});

shoesRoutes.route('/').get((req, res) => {
    Backpacks.find((err, shoes) => {
        if (err) {
            console.log(err);
        } else {
            res.json(shoes);
        }
    });
});

backpacksRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Backpacks.findById(id, (err, backpack) => {
        res.json(backpack);
    })
});

tentsRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Tents.findById(id, (err, tent) => {
        res.json(tent);
    })
});

backpacksRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Shoes.findById(id, (err, shoes) => {
        res.json(shoes);
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

tentsRoutes.route('/add').post((req, res) => {
    let tenr = new Tents(req.body);
    tent.save()
        .then(tent => {
            res.status(200).json({'tent': 'tent added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new tent failed');
        })
});

shoesRoutes.route('/add').post((req, res) => {
    let shoes = new Shoes(req.body);
    shoes.save()
        .then(shoes => {
            res.status(200).json({'shoes': 'shoes added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new shoes failed');
        })
});

backpacksRoutes.route('/update/:id').post((req, res) => {
    Backpacks.findById(req.params.id, (err, backpack) => {
        if (!backpack)
            res.status(404).send('backpack not found');
        else
            backpack.manufacturer = req.body.manufacturer;
            backpack.name = req.body.name;
            backpack.weight = req.body.weight;
            backpack.weight_units = req.body.weight_units;
            backpack.price = req.body.price;
            backpack.materials = req.body.materials;
            backpack.volume = req.body.volume;
            backpack.frame = req.body.frame;
            backpack.hipbelt = req.body.hipbelt;
            backpack.href = req.body.href;
            backpack.max_load = req.body.max_load;

            backpack.save().then(backpack => {
                res.status(200).json('Backpack updated');
            })
            .catch(err => {
                res.status(400).send("Updated failed");
            })
    });
})

tentsRoutes.route('/update/:id').post((req, res) => {
    Tents.findById(req.params.id, (err, tent) => {
        if (!tent)
            res.status(404).send('tent not found');
        else
            tent.manufacturer = req.body.manufacturer;
            tent.name = req.body.name;
            tent.weight = req.body.weight;
            tent.weight_units = req.body.weight_units;
            tent.price = req.body.price;
            tent.href = req.body.href;
            tent.wall = req.body.wall;
            tent.material = req.body.material;
            tent.min_stakes = req.body.min_stakes;
            tent.max_stakes = req.body.max_stakes;
            tent.length = req.body.length;
            tent.floor_area = req.body.floor_area;
            tent.freestanding = req.body.freestanding;

            tent.save().then(tent => {
                res.status(200).json('Tent updated');
            })
            .catch(err => {
                res.status(400).send("Updated failed");
            })
    });
})

shoesRoutes.route('/update/:id').post((req, res) => {
    Shoes.findById(req.params.id, (err, shoes) => {
        if (!shoes)
            res.status(404).send('shoes not found');
        else
            shoes.manufacturer = req.body.manufacturer;
            shoes.name = req.body.name;
            shoes.weight = req.body.weight;
            shoes.weight_units = req.body.weight_units;
            shoes.price = req.body.price;
            shoes.href = req.body.href;
            shoes.stack = req.body.stack;
            shoes.drop = req.body.drop;

            shoes.save().then(shoes => {
                res.status(200).json('Shoes updated');
            })
            .catch(err => {
                res.status(400).send("Updated failed");
            })
    });
})


app.use('/backpacks', backpacksRoutes);
app.use('/tents', tentsRoutes);
app.use('/shoes', shoesRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});