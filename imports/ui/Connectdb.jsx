const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shafiq:shafiq@cluster0-yikqg.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

// require('./merchantForm');