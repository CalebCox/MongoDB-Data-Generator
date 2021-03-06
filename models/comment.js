const mongoose      = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: String
});

let Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;