const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentBody: {
        type: String,
        required: true
    }
});

commentSchema.set('timestamps', true);

module.exports = mongoose.model('Comment', commentSchema);