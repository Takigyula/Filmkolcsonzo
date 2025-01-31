const path = require('node:path');
const Sorozat = require('../models/Sorozat');

exports.getUjSorozat = (req, res) => {
    try {
        const viewsUt = path.join(__dirname, '..', 'views', 'ujSorozat.ejs');
        res.status(200).render(viewsUt);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.postUjSorozat = async (req, res) => {
    try {
        const { cim, epizodokSzama, plakat, statuszok, leiras, kategoriak } = req.body;

        const newSorozat = new Sorozat({
            cim,
            epizodokSzama,
            plakat,
            statuszok,
            leiras,
            kategoriak,
        });
        console.log(newSorozat);
        await newSorozat.save();

        res.status(200).json({ msg: 'Sikeres sorozat felvétel!' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
