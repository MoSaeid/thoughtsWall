const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tpostSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now(),
    },

    tags: {
        type: String,
        enum: ['jokes', 'technology', 'news', 'ideas', 'random', 'others'],
        default: 'others'
    },

    tpostBody: String,

    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

module.exports = mongoose.model('Tpost', tpostSchema);