const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//added commentSchema as new Schema used for docs storing comments about campsite
const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    //added comment schema as subdoc inside campsite schema
    comments: [commentSchema]
}, {
    timestamps: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema);//this creates model named Campsites & 1st arg should be cap singular version of the name of the collection want use for model; 2nd arg schema want use for collection; mongoose.model returns a constructor f(x); this model will be used to instantiate docs for mongodb

module.exports = Campsite;