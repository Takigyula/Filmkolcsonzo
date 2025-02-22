const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema(
    {
        cim: {
            type: String,
            required: true,
        },
        hossz: {
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
            default: 'Filmek',
        },
        kategoriak: [
            {
                type: String,
                default: 'filmek',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const FilmModel = mongoose.model('film', filmSchema);

module.exports = FilmModel;
