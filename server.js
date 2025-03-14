require('dotenv').config();
const express = require('express');
const path = require('node:path');
const mongoDbConnection = require('./middlewares/dbConnection');
const cors = require('cors');
const Nezo = require('./models/Nezo');
const bcrypt = require('bcrypt');
// const axios = require('axios');

const id = 1;
const statusz = 'előfizetett';

// axios.put(`http://localhost:3500/api/cinema/nezok/statusz`, {
//   id,
//   statusz
// })
// .then((response) => {
//   console.log(response.data);
// })
// .catch((error) => {
//   console.error(error);
// });

const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoDbConnection()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/api/cinema`);
        });
    })
    .catch((error) => {
        console.log(`Valami hiba történt: ${error}`);
    });

app.use('/api/cinema', require('./routes/mainRoutes'));
// Sorozatok
app.use('/api/cinema/sorozatok', require('./routes/sorozatokRoutes'));
app.use('/api/cinema/ujsorozat', require('./routes/ujsorozatRoutes'));
app.use('/api/cinema/egyedisorozat', require('./routes/egyediSorozatRoutes'));
app.use(
    '/api/cinema/egyedisorozatmodosit',
    require('./routes/egyediSorozatModositRoutes')
);
// Filmek
app.use('/api/cinema/filmek', require('./routes/filmekRoutes'));
app.use('/api/cinema/ujfilm', require('./routes/ujFilmRoutes'));
app.use('/api/cinema/egyedifilm', require('./routes/egyediFilmRoutes'));
app.use(
    '/api/cinema/egyedifilmmodosit',
    require('./routes/egyediFilmModositRoutes')
);
app.use('/api/cinema/csillagmodosit', require('./routes/csillagModositRoutes'));
// Felhasználó
app.use('/api/cinema/nezok', require('./routes/nezokRoutes'));
app.use('/api/cinema/nezok/statusz', require('./routes/nezokStatuszRoutes'));
app.put('/api/cinema/nezok/avatar', async (req, res) => {
    const { email, avatar } = req.body;
    try {
        const nezo = await Nezo.findOne({ email });
        if (nezo) {
            if (avatar) {
                nezo.avatar = avatar;
            }
            await nezo.save();
            res.status(200).json({ msg: 'Sikeres frissítés!' });
        } else {
            res.status(404).json({ msg: 'Nem található felhasználó!' });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});
app.use('/api/cinema/nezokfront', require('./routes/nezokFrontRoutes'));
// Foglalások
app.use('/api/cinema/foglalasok', require('./routes/foglalasokRoutes'));
// Frontend
app.use('/api/cinema/register', require('./routes/registerRoutes'));
app.use('/api/cinema/login', require('./routes/loginRoutes'));
app.put('/api/cinema/nezok/jelszo', async (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password });
    try {
        const nezo = await Nezo.findOne({ email });
        console.log(nezo);
        if (nezo) {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = bcrypt.hashSync(password, salt);
                await Nezo.findByIdAndUpdate(
                    { _id: nezo._id },
                    { password: hashedPassword }
                );
            }
            res.status(200).json({ msg: '' });
        } else {
            res.status(404).json({ msg: 'Nem található felhasználó!' });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});
