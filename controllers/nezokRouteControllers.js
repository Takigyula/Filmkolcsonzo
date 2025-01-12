const path = require('node:path');
const Nezo = require('../models/Nezo');

exports.getNezok = async (req, res) => {
    const nezok = await Nezo.find({});
    try {
        const viewsUt = path.join(__dirname, '..', 'views', 'nezok.ejs');
        res.status(200).render(viewsUt, { nezok });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.deleteNezo = async (req, res) => {
    const id = req.params.id;

    try {
        await Nezo.findByIdAndDelete({ _id: id });
        res.status(200).json({ msg: 'Sikeres néző törlés!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
