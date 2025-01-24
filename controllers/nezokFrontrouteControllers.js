const path = require('node:path');
const Nezo = require('../models/Nezo');

exports.getNezok = async (req, res) => {
    try {
        const nezok = await Nezo.find({});
        return res.status(200).json({ nezok });
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
};