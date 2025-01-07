const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema(
    {
        cim: [{
            type: String,
            required: true,
        }],
        hossz: [{
            type: Number,
            required: true,
        }],
        plakat: [{
            type: String,
            required: true,
        }],
        idopontok: [{
            type: String,
            required: true,
        }],
        arkategoria: [{
            type: String,
            required: true,
        }],
    },
    {
        timestamps: true,
    }
);

const FilmModel = mongoose.model('film', filmSchema);

module.exports = FilmModel;
