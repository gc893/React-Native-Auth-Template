const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bingeTwo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Mongoose connected to ${db.host}.`)
})

module.exports = mongoose;