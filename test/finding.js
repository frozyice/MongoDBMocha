const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('finding', function(){
  let marioChar;

  beforeEach(function(done){
    marioChar = new MarioChar({
      name: 'Mario'
    });
    marioChar.save().then(function(){
      done();
    });
  });

  it('Finds from the database', function(done){
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === marioChar.name);
      done();
    });
  });

  it('Finds by id', function(done){
    MarioChar.findOne({_id: marioChar._id}).then(function(result){
      assert(result._id.toString() === marioChar._id.toString());
      done();
    });
  });

});
