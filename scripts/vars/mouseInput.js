var mouseInput = {
  //mouse position on screen
  _pos:{
    x:0,
    y:0,
  },

  //gets true mouse position
  get pos() {
    return camera.input(this._pos, {x:0, y:0}).pos;
  },

  set pos(pos) {
    this._pos = pos;
  },

  //whether mouse button is down
  pressed:false,

  //creates mouse listener
  initialize:function() {
    game.canvas.addEventListener('mousemove', this.mouseMove, false);
    game.canvas.addEventListener('mousedown', this.mouseDown, false);
    game.canvas.addEventListener('mouseup', this.mouseUp, false);
  },
  
  //called when mouse is moved
  mouseMove:function(evt) {
    mouseInput.pos = mouseInput.getMousePos(evt);
  },
  
  //called when mouse is clicked
  mouseDown:function(evt) {
    mouseInput.pressed = true;
  },
  
  //called when mouse is released
  mouseUp:function(evt) {
    mouseInput.pressed = false;
  },
  
  //returns mouse position within canvas
  getMousePos:function(evt) {
    var rect = game.canvas.getBoundingClientRect();
    return {x: evt.clientX - rect.left, y: evt.clientY - rect.top};
  },
};
