const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const backpacksRoutes = express.Router();
const tentsRoutes = express.Router();
const shoesRoutes = express.Router();
const PORT = 4000;
const {Backpacks, Tents, Shoes, BackpackSuggestions, TentSuggestions, ShoeSuggestions} = require('./gear.model');

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
    Shoes.find((err, shoes) => {
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

shoesRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Shoes.findById(id, (err, shoes) => {
        res.json(shoes);
    })
});

backpacksRoutes.route('/suggest').post((req, res) => {
    let backpack = new BackpackSuggestions(req.body);
    backpack.save()
        .then(backpack => {
            res.status(200).json({'backpack': 'backpack suggestion added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new backpack failed');
        })
});

tentsRoutes.route('/suggest').post((req, res) => {
    let tent = new TentSuggestions(req.body);
    console.log(req.body);
    tent.save()
        .then(tent => {
            res.status(200).json({'tent': 'tent suggestion added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new tent failed');
        })
});

shoesRoutes.route('/suggest').post((req, res) => {
    let shoes = new ShoeSuggestions(req.body);
    shoes.save()
        .then(shoes => {
            res.status(200).json({'shoes': 'shoes suggestion added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new shoes failed');
        })
});

app.use('/backpacks', backpacksRoutes);
app.use('/tents', tentsRoutes);
app.use('/shoes', shoesRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});