var keyBoardInput = {
    //array storing what keys are held down
    key: [],
    
    //array storing what keys were previously held down
    lastKey: [],

    //creates keyboard listener
    initialize: function() {
        this._bind_keys();
    },

    //sets up keyboard listener
    _bind_keys: function() {
        //called whenever a key is pressed
        window.onkeydown = function(e) {
            keyBoardInput.key[e.keyCode] = true;
        };
        
        //called whenever a key is released
        window.onkeyup = function(e) {
            keyBoardInput.key[e.keyCode] = false;
        };
    },
    
    //variable manipulation
    update: function() {
        this.lastKey = this.key.slice();
    },
};
