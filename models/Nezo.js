const mongoose = require('mongoose');
const Foglalas = require('../models/Foglalas');

const NezoSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
        },
        admine: {
            type: Boolean,
            default: false,
        },
        statusz: {
            type: String,
            required: true,
            default: 'VIP',
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
