const path = require('node:path');
const Film = require('../models/Film');

exports.getEgyediFilmModosit = async (req, res) => {
    const parameterek = req.params;

    try {
        const modFilm = await Film.findById(parameterek.id);
        // console.log(modFilm);
        const viewsUt = path.join(
            __dirname,
            '..',
            'views',
            'egyediFilmModosit.ejs'
        );
        res.status(200).render(viewsUt, { modFilm });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.postEgyediFilmModosit = async (req, res) => {
    const { id, cim, hossz, plakat, idopontok, arkategoria } = req.body;

    try {
        await Film.findByIdAndUpdate(
            { _id: id },
            {
                cim,
                hossz,
                plakat,
                idopontok,
                arkategoria,
            }
        );

        res.status(200).json({ msg: 'Sikeres film módosítás!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
