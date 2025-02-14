const path = require('node:path');
const Nezo = require('../models/Nezo');

exports.updateNezo = async (req, res) => {
    const id = req.params.id;

    try {
        const nezo = await Nezo.findByIdAndUpdate(
            { _id: id },
            { statusz: req.body.statusz }
        );
        console.log(nezo);

        res.status(200).json({ msg: 'Sikeres státusz módosítás!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
