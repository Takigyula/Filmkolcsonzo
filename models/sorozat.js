const mongoose = require('mongoose');

const sorozatSchema = new mongoose.Schema(
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
        idopontok: {
            type: Array,
            required: true,
        },
        arkategoria: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const sorozatModel = mongoose.model('sorozat', sorozatSchema);

module.exports = sorozatModel;
