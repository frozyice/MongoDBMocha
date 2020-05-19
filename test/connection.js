const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(function(done){
    mongoose.connect('mongodb://localhost/testaroo');
    mongoose.connection.once('open', function(){
        console.log('Db connection succsessful');
    }).on('error', function(error){
        console.log('Error:', error);
    });

    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });

});

afterEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});
