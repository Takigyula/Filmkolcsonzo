const bcrypt = require('bcrypt');
const Nezo = require('../models/Nezo');

exports.postRegister = async (req, res) => {
    const { email, password, statusz, avatar } = req.body;
    try {
        if (!email || !password || !statusz || !avatar) {
            return res
                .status(400)
                .json({ msg: 'Minden mezőt kötelező kitölteni!' });
        }

        const regisztralt = await Nezo.findOne({ email });

        if (regisztralt) {
            return res
                .status(401)
                .json({ msg: 'Ilyen adatokkal létezik felhasználó!' });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = bcrypt.hashSync(password, salt);

        const newNezo = new Nezo({
            email,
            password: hashedPassword,
            statusz,
            avatar,
        });

        console.log(newNezo);

        await newNezo.save();

        res.status(201).json({ msg: 'Sikeres regisztráció!' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
