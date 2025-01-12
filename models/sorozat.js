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
        statuszok: [{ type: String }],
    },
    {
        timestamps: true,
    }
);

const sorozatModel = mongoose.model('sorozat', sorozatSchema);

module.exports = sorozatModel;
