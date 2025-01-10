const path = require('node:path');
const Sorozat = require('../models/sorozat');

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
    const { cim, hossz, plakat, idopontok, arkategoria } = req.body;
    const idopontTomb = idopontok.split('\n');
    const arkategoriaTomb = arkategoria.split('\n');
    
        const newSorozat = new Sorozat({
            cim,
            hossz,
            plakat,
            idopontok: idopontTomb,
            arkategoria: arkategoriaTomb,
        });
        console.log(newSorozat);
        await newSorozat.save();

        res.status(200).json({ msg: 'Sikeres sorozat felvétel!' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
