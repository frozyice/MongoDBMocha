const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('updating', function(){
  let marioChar;

  beforeEach(function(done){
    marioChar = new MarioChar({
      name: 'Mario',
      weight: 50
    });
    marioChar.save().then(function(){
      done();
    });
  });

  it('Updates the name', function(done){
      MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
          MarioChar.findOne({_id: marioChar._id}).then(function(result){
              assert(result.name === 'Luigi');
              done();
          });
      });
  });

 it('Adds 1 to the weight', function(done){
    MarioChar.update({}, { $inc: { weight: 1 } }).then(function(){
        MarioChar.findOne({name: 'Mario'}).then(function(record){
            assert(record.weight === 51);
            done();
        });
    });
 });
});
