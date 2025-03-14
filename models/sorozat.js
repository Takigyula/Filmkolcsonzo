const mongoose = require('mongoose');

const sorozatSchema = new mongoose.Schema(
    {
        cim: {
            type: String,
            required: true,
        },
        epizodokSzama: {
            type: Number,
            required: true,
        },
        plakat: {
            type: String,
            required: true,
        },
        szereplok: {
            type: String,
            required: true,
        },
        trailer: {
            type: String,
            required: true,
        },
        statuszok: [{ type: String }],
        leiras: {
            type: String,
            required: true,
        },
        kategoria: {
            type: String,
            default: 'Sorozatok',
        },
        kategoriak: [
            {
                type: String,
                default: 'sorozatok',
            },
        ],
        stars: {
            type: Number,
            default: 0,
        },
        ertekelok: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'viewer',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const sorozatModel = mongoose.model('sorozat', sorozatSchema);

module.exports = sorozatModel;
