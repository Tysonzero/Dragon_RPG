var platform = {
  //array of Platform objects
  instances:[],

  //Platform prototype
	Platform:function(pos, size) {
    //objects with x and y attributes
		this.pos = pos;
		this.size = size;
	},
  
  //drawing to screen
  draw:function() {
    //draw all platforms
    for (i = 0; i < this.instances.length; i++) {
      pos = camera.getPos(this.instances[i].pos);
      size = camera.getSize(this.instances[i].size);
      game.ctx.fillStyle="#000000";
      game.ctx.fillRect(pos.x - size.x/2, pos.y - size.y/2, size.x, size.y);
    }
  },
  
  //creates a new platform
  create:function(pos, size) {
    this.instances[this.instances.length] = new this.Platform(pos, size);
  },
};
