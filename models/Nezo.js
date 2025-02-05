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
            default: 'Standard',
        },
        avatar: {
            type: String,
            required: true,
            default: 'avatar_001.jpg',
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
const nezoSchema = new mongoose.Schema({
    // ...
    jelszoValtoztatas: {
        type: Boolean,
        default: false,
    },
});