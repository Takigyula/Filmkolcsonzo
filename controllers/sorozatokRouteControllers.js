const path = require('node:path');
const Sorozat = require('../models/Sorozat');

exports.getSorozatok = async (req, res) => {
    const sorozatok = await Sorozat.find({});
    try {
        const viewsUt = path.join(__dirname, '..', 'views', 'sorozatok.ejs');
        res.status(200).render(viewsUt, { sorozatok });
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
