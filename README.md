# Database Dummy Data Generator

This application is written to be run in a local environment in conjuction with mongoose schema's to properly populate a MongoDB database with test data utilizing the [Faker](https://www.npmjs.com/package/faker) module.

Simply download this repo, modify the existing models to fit your needs or add your own, modify the `seeds.js` file to properly populate your data and update the `mongoose.connect` statement in `app.js` to connect to your database locally hosted or remote.

the `SeedDB()` function takes 1 argument, the number of times it should iterate to populate data, for example, if you want to generate 10 posts with 10 comments (1 comment per post) you would call `SeedDB(10)` within the `app.js` file.

Run the generator with `node app.js` from the command line within the applications root directory.