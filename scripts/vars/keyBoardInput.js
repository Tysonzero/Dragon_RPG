var keyBoardInput = {
  //array storing what keys are held down
  key:[],

  //creates keyboard listener
  initialize:function() {
    this._bind_keys();
  },

  _bind_keys:function() {
    //called whenever a key is pressed
    window.onkeydown = function(e) {
      keyBoardInput.key[e.keyCode] = true;
    };
    
    //called whenever a key is released
    window.onkeyup = function(e) {
      keyBoardInput.key[e.keyCode] = false;
    };
  },
};
