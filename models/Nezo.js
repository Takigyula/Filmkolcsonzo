const mongoose = require('mongoose');
const Foglalas = require('../models/Foglalas');

const NezoSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
        },
        foglalas: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'reservation',
            },
        ],
    },
    { timestamps: true }
);

const NezoModel = mongoose.model('viewer', NezoSchema);

module.exports = NezoModel;
