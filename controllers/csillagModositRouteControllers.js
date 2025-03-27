const path = require('node:path');
const Film = require('../models/Film');
const Sorozat = require('../models/Sorozat');
const Nezo = require('../models/Nezo');

exports.updateCsillagModosit = async (req, res) => {
    const { id } = req.params;
    console.log('id: ', id);

    try {
        const film = await Film.findById({ _id: id });
        console.log(film);

        const sorozat = await Sorozat.findById({ _id: id });
        console.log(sorozat);
        const { szam, userId } = req.body;

        if (film) {
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

                return res
                    .status(200)
                    .json({ msg: 'Sikeresen szavasztál a címre!' });
            } else {
                return res.status(403).json({ msg: 'Te már szavaztál!' });
            }
        }

        if (sorozat) {
            if (!sorozat.ertekelok.includes(userId)) {
                console.log('userke: ', userId);
                let osszeg = Math.ceil((Number(sorozat.stars) + szam) / 2);
                let tomb = sorozat.ertekelok;
                tomb.push(userId);
                console.log('Sorozat: ', tomb);

                await Sorozat.findByIdAndUpdate(
                    { _id: id },
                    {
                        stars: osszeg,
                        ertekelok: tomb,
                    }
                );

                return res
                    .status(200)
                    .json({ msg: 'Sikeresen szavasztál a címre!' });
            } else {
                return res.status(403).json({ msg: 'Te már szavaztál!' });
            }
        }
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
