const path = require('node:path');
const Sorozat = require('../models/Sorozat');

exports.getEgyediSorozat = async (req, res) => {
    try {
        const parameterek = req.params;
        const sorozat = await Sorozat.findById(parameterek.id);
        const viewsUt = path.join(
            __dirname,
            '..',
            'views',
            'egyediSorozat.ejs'
        );
        res.status(200).render(viewsUt, { sorozat });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.deleteEgyediSorozat = async (req, res) => {
    const { id } = req.body;
    try {
        await Sorozat.findByIdAndDelete({ _id: id });
        res.status(200).json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
