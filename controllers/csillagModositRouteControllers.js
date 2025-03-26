const path = require('node:path');
const Film = require('../models/Film');
const Nezo = require('../models/Nezo');

exports.updateCsillagModosit = async (req, res) => {
    const { id } = req.params;
    try {
        const film = await Film.findById({ _id: id });
        const { szam, userId } = req.body;

        if (!film.ertekelok.includes(userId)) {
            let osszeg = Math.ceil((Number(film.stars) + szam) / 2);
            let tomb = film.ertekelok;
            tomb.push(userId);
            console.log(tomb);
    
            await Film.findByIdAndUpdate(
                { _id: id },
                {
                    stars: osszeg,
                    ertekelok: tomb,
                }
            );
    
            return res.status(200).json({ msg: 'Sikeres sorozat módosítás!' });
        } else {
            return res.status(403).json({ msg: 'Te már szavaztál!' });
        }
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
