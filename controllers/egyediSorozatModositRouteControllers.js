const path = require('node:path');
const Sorozat = require('../models/Sorozat');

exports.getEgyediSorozatModosit = async (req, res) => {
    const parameterek = req.params;

    try {
        const modSorozat = await Sorozat.findById(parameterek.id);

        const viewsUt = path.join(
            __dirname,
            '..',
            'views',
            'egyediSorozatModosit.ejs'
        );
        res.status(200).render(viewsUt, { modSorozat });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.updateEgyediSorozatModosit = async (req, res) => {
    try {
        const { id, cim, epizodokSzama, plakat, statuszok,leiras,kategoriak } = req.body;

        await Sorozat.findByIdAndUpdate(
            { _id: id },
            {
                cim,
                epizodokSzama,
                plakat,
                statuszok,
                leiras,
                kategoriak,
            }
        );

        res.status(200).json({ msg: 'Sikeres sorozat módosítás!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
