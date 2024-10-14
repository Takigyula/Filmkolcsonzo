const mongoose = require('mongoose');
const Film = require('./Film');
const Nezo = require('./Nezo');

const foglalasSchema = new mongoose.Schema(
    {
        filmCim: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'film',
        },
        nezok: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'viewer',
            },
        ],
    },
    { timestamps: true }
);

const FoglalasModel = mongoose.model('reservation', foglalasSchema);

module.exports = FoglalasModel;
