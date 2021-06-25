require('dotenv').config({ path: "./process.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const AdminBro = require("admin-bro");
const AdminExpress = require("@admin-bro/express");
const AdminMongoose = require("@admin-bro/mongoose");
const {Backpacks, Tents, Shoes, BackpackSuggestions, TentSuggestions, ShoeSuggestions} = require('./gear.model');

const app = express();
const backpacksRoutes = express.Router();
const tentsRoutes = express.Router();
const shoesRoutes = express.Router();

const PORT = process.env.PORT || 4000;
const ADMIN = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
}

AdminBro.registerAdapter(AdminMongoose);

app.use(cors());
app.use(express.json());

const run = async () => {
    const gearDb = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

    const adminPanel = new AdminBro({
        databases: [gearDb],
        rootPath: '/admin',
    })
    
    const adminRouter = AdminExpress.buildAuthenticatedRouter(adminPanel, {
        authenticate: async (email, password) => {
            if (ADMIN.email === email && ADMIN.password === password) {
                return ADMIN;
            }
            return null;
        },
        cookieName: 'adminpanel',
        cookiePassword: process.env.COOKIE_PASSWORD,
    })

    app.use(adminPanel.options.rootPath, adminRouter)
}

run();

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