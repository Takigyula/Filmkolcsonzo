const path = require('node:path');
const Film = require('../models/Film');

exports.updateCsillagModosit = async (req, res) => {
    const { id } = req.params;
    try {
        const film = await Film.findById({ _id: id });
        const { szam, userId } = req.body;
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

        res.status(200).json({ msg: 'Sikeres sorozat módosítás!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
