require('dotenv').config();
const express = require('express');
const path = require('node:path');
const mongoDbConnection = require('./middlewares/dbConnection');
const cors = require('cors');

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
app.use('/api/cinema/filmek', require('./routes/filmekRoutes'));
app.use('/api/cinema/ujfilm', require('./routes/ujFilmRoutes'));
app.use('/api/cinema/egyedifilm', require('./routes/egyediFilmRoutes'));
app.use(
    '/api/cinema/egyedifilmmodosit',
    require('./routes/egyediFilmModositRoutes')
);
app.use('/api/cinema/sorozatok', require('./routes/nezokRoutes'));
app.use('/api/cinema/foglalasok', require('./routes/foglalasokRoutes'));
app.use('/api/cinema/ujsorozat', require('./routes/ujsorozatRoutes'));
