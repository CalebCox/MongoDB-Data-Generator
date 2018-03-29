let mongoose = require('mongoose'),
    faker    = require('faker'),
    Post     = require('./models/posts'),
    Comment  = require('./models/comment');

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function seedDB(itr) {
    // Remove all test data
    Post.remove({}, (err) => {
        if (err) {
            console.log(err);
        } else {
            Comment.remove({}, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("removed comment");
                }
            });
            console.log("removed posts");
            // add new posts
            let lostFound,
                genPostType,
                lost,
                found;
            for (i = 0; i < itr; i++) {
                genPostType = randomInt(1, 10);
                if (genPostType <= 5) {
                    lostFound = 'FOUND';
                    found = {
                        incident: faker.lorem.paragraph(),
                        name: faker.name.firstName()
                    };

                    lost = {
                        name: '',
                        areaDesc: '',
                        chipped: '',
                        incident: ''
                    };
                } else {
                    lostFound = 'LOST';
                    lost = {
                        name: faker.name.firstName(),
                        areaDesc: faker.lorem.sentence(),
                        chipped: faker.random.boolean(),
                        incident: faker.lorem.paragraph()
                    };
                    found = {
                        incident: '',
                        name: ''
                    };
                }
                Post.create({
                    title: faker.lorem.word(),
                    image: faker.image.imageUrl(),
                    postType: lostFound,
                    petType: {
                        petCategory: faker.lorem.word(),
                    },
                    breed: faker.lorem.word(),
                    gender: faker.lorem.word(),
                    age: faker.random.number(),
                    date: faker.date.recent(),
                    description: faker.lorem.paragraph(),
                    location: {
                        street: faker.address.streetName(),
                        city: faker.address.city(),
                        state: faker.address.stateAbbr(),
                        postal: faker.random.number(),
                    },
                    lost: lost,
                    found: found,
                }, (err, post) => {
                    if (err) {
                        console.log("Something went wrong: " + err);
                    } else {
                        console.log("post created!");
                        Comment.create(
                            {
                                text: faker.lorem.sentence(),
                                author: faker.internet.userName()
                            }, function (err, comment) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    post.comments.push(comment);
                                    post.save();
                                    console.log("New comment created!");
                                };
                            });
                    };
                });
            };
        };
    });
};

module.exports = seedDB;