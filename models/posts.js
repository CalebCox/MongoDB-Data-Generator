const mongoose      = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    image: String,
    postType: String,               // LOST or FOUND
    petType: {                      // Determined by petChoice Radio button.
        petCategory: String,        // Selected radio button (Cat, Dog, Other)
        otherType: String           // if Other, user inputted string.
    },
    breed: String,
    gender: String,
    age:    Number,
    createdAt: {                    // the date the post was created
        type: Date,
        default: Date.now
    },
    date: String,                   // the date the user inputs, stored in string format.
    description: String,
    location: {
        street: String,
        city: String,
        state: String,
        postal: String 
    },
    lost: {
        name: String,
        areaDesc: String,
        chipped: String,
        incident: String
    },
    found: {
        incident: String,
        name:   String,
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Post", postSchema);