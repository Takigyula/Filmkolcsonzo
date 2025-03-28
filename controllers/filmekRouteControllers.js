const path = require('node:path');
const Film = require('../models/Film');

exports.getFilmek = async (req, res) => {
    const filmek = await Film.find({}).populate('ertekelok');

    try {
        const viewsUt = path.join(__dirname, '..', 'views', 'filmek.ejs');

        res.status(200).render(viewsUt, { filmek });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.getFilms = async (req, res) => {
    const filmek = await Film.find({});
    try {
        res.status(200).json({ filmek });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
