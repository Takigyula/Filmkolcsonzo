const path = require('node:path');
const Nezo = require('../models/Nezo');
const Film = require('../models/Film');
const Foglalas = require('../models/Foglalas');

exports.getFoglalasok = async (req, res) => {
    try {
        const foglalasFilm = await Foglalas.find({}).populate({
            path: 'filmCim',
        });
        console.log(foglalasFilm[0].filmCim);
        const foglalasNezok = await Foglalas.find({}).populate({
            path: 'nezok',
        });
        console.log(foglalasNezok[0].nezok);

        const viewsUt = path.join(__dirname, '..', 'views', 'foglalasok.ejs');
        res.status(200).render(viewsUt, { foglalasFilm, foglalasNezok });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
