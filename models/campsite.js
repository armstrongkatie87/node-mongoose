const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true//auto add 2 props: created at & updated at
});

const Campsite = mongoose.model('Campsite', campsiteSchema);//this creates model named Campsites & 1st arg should be cap singular version of the name of the collection want use for model; 2nd arg schema want use for collection; mongoose.model returns a constructor f(x); this model will be used to instantiate docs for mongodb

module.exports = Campsite;