const bcrypt = require('bcrypt');
const Nezo = require('../models/Nezo');

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);

    try {
        if (!email || !password) {
            return res
                .status(400)
                .json({ msg: 'Minden mezőt kötelező kitölteni!' });
        }

        const regisztralt = await Nezo.findOne({ email });

        if (!regisztralt) {
            return res.status(401).json({
                msg: 'Ilyen adatokkal nem létezik felhasználó! Regisztrálj!',
            });
        }

        const letezoNezo = await bcrypt.compare(password, regisztralt.password);

        if (letezoNezo) {
            return res
                .status(200)
                .json({ msg: 'Sikeres belépés!', regisztralt });
        } else {
            return res.status(403).json({ msg: 'Helytelen jelszó vagy email cím!' });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
