const path = require('node:path');
const Film = require('../models/Film');

exports.getEgyediFilmModosit = async (req, res) => {
    const parameterek = req.params;

    try {
        const modFilm = await Film.findById(parameterek.id);

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

exports.updateEgyediFilmModosit = async (req, res) => {
    try {
        const { id, cim, hossz, plakat, statuszok,leiras,kategoriak } = req.body;
        await Film.findByIdAndUpdate(
            { _id: id },
            {
                cim,
                hossz,
                plakat,
                statuszok,
                leiras,
                kategoriak,
            }
        );

        res.status(200).json({ msg: 'Sikeres film módosítás!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
