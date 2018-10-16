const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test_user', { useNewUrlParser: true });

mongoose.connection
        .once('open', ()=>{})
        .on('error',(error)=>{
            console.warn('Warning', error);
        });

