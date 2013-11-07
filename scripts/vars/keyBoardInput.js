var keyBoardInput = {
  //array storing what keys are held down
  key:[],
  
  //array storing what keys were held down last frame
  lastKey:[],

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
  
  //variable manipulation at end of frame
  postFrame:function() {
    //sets lastKey array equal to current keys pressed
    this.lastKey = this.key;
  },
};
