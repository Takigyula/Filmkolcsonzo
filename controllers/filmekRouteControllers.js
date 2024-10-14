const path = require('node:path');
const Film = require('../models/Film');

exports.getFilmek = async (req, res) => {
    const filmek = await Film.find({}).sort('hossz');
    try {
        const viewsUt = path.join(__dirname, '..', 'views', 'filmek.ejs');
        res.status(200).render(viewsUt, { filmek });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
