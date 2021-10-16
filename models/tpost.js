const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tpostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        enum: ['jokes', 'technology', 'news', 'ideas', 'random', 'others'],
        default: 'others'
    },
    tpostBody: {
        type: String
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

tpostSchema.set('timestamps', true);

module.exports = mongoose.model('Tpost', tpostSchema);