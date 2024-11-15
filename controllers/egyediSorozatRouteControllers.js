const path = require('node:path');
const Sorozat = require('../models/Film');

exports.getEgyediSorozat = async (req, res) => {
    const parameterek = req.params;
    const sorozat = await Sorozat.findById(parameterek.id);
    try {
        const viewsUt = path.join(__dirname, '..', 'views', 'egyediSorozat.ejs');
        res.status(200).render(viewsUt, { sorozat });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.deleteEgyediFilm = async (req, res) => {
    const { id } = req.body;
    try {
        await Film.findByIdAndDelete({ _id: id });
        res.status(200).json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};