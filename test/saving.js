const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('saving', function(){

  it('Saves to the database', function(done){

    const marioChar = new MarioChar({
      name: 'Mario'
    });

    marioChar.save().then(function(){
      assert(!marioChar.isNew);
      done();
    });

  });

});
