const mongoose = require('mongoose');

// First start mongo using
// "\Users\Alina Arap\mongodb\bin\mongod" --dbpath="\Users\Alina Arap\mongodb-data"

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
