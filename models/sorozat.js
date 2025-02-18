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
        kategoriak: [{
            type: String,
            default: 'sorozatok',
        }],
    },
    {
        timestamps: true,
    }
);

const sorozatModel = mongoose.model('sorozat', sorozatSchema);

module.exports = sorozatModel;
