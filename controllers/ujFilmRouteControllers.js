const path = require('node:path');
const Film = require('../models/Film');

exports.getUjFilm = (req, res) => {
    try {
        const viewsUt = path.join(__dirname, '..', 'views', 'ujFilm.ejs');
        res.status(200).render(viewsUt);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.postUjFilm = async (req, res) => {
    const { cim, hossz, plakat, idopontok, arkategoria } = req.body;
    const idopontTomb = idopontok.split('\n');
    const arkategoriaTomb = arkategoria.split('\n');

    try {
        const newFilm = new Film({
            cim,
            hossz,
            plakat,
            idopontok: idopontTomb,
            arkategoria: arkategoriaTomb,
        });
        await newFilm.save();

        res.status(200).json({ msg: 'Sikeres film felvétel!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
