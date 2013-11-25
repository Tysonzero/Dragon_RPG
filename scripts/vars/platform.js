var platform = {
  //array of Platform objects
  instances:[],

  //Platform prototype
	Platform:function(pos, size) {
    //objects with x and y attributes
		this.pos = pos;
		this.size = size;
	},
  
  //creates a new platform
  create:function(posX, posY, sizeX, sizeY) {
    this.instances[this.instances.length] = new this.Platform({x:posX, y:posY}, {x:sizeX, y:sizeY});
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
  
  //adjust object if a collision occurs
  collide:function(pos, size) {
    //object containing adjustments to make to object
    var collision = {
      left:0,
      right:0,
      up:0,
      down:0,
    }
  
    //check if object collides with any platform
    for (i = 0; i < this.instances.length; i++) {
      if (pos.y + size.y/2 > this.instances[i].pos.y - this.instances[i].size.y/2 && pos.y - size.y/2 < this.instances[i].pos.y + this.instances[i].size.y/2) {
        if (pos.x + size.x/2 >= this.instances[i].pos.x - this.instances[i].size.x/2 && pos.x + size.x/2 <= this.instances[i].pos.x + this.instances[i].size.x/2) {
          alert("RIGHT SIDE COLLISION");
        }
        if (pos.x - size.x/2 <= this.instances[i].pos.x + this.instances[i].size.x/2 && pos.x - size.x/2 >= this.instances[i].pos.x - this.instances[i].size.x/2) {
          alert("LEFT SIDE COLLISION");
        }
      }
      if (pos.x + size.x/2 > this.instances[i].pos.x - this.instances[i].size.x/2 && pos.x - size.x/2 < this.instances[i].pos.x + this.instances[i].size.x/2) {
        if (pos.y + size.y/2 >= this.instances[i].pos.y - this.instances[i].size.y/2 && pos.y + size.y/2 <= this.instances[i].pos.y + this.instances[i].size.y/2) {
          alert("BOTTOM SIDE COLLISION");
        }
        if (pos.y - size.y/2 <= this.instances[i].pos.y + this.instances[i].size.y/2 && pos.y - size.y/2 >= this.instances[i].pos.y - this.instances[i].size.y/2) {
          alert("TOP SIDE COLLISION");
        }
      }
    }
  }
};
