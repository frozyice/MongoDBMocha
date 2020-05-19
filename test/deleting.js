const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('deleting', function(){
  let marioChar;
  beforeEach(function(done){
    marioChar = new MarioChar({
      name: 'Mario'
    });
    marioChar.save().then(function(){
      done();
    });
  });

  it('Deletes from database', function(done){
    MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result === null);
        done();
      });
    });
  });

});
