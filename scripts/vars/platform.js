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
  collide:function(pos, size, speed) {
    //object containing depth of object collision
    var collision = {
      left:0,
      right:0,
      top:0,
      bottom:0,
    }
  
    //check if object collides with any platform
    for (i = 0; i < this.instances.length; i++) {
      if (pos.y + size.y/2 > this.instances[i].pos.y - this.instances[i].size.y/2 + 10 && pos.y - size.y/2 < this.instances[i].pos.y + this.instances[i].size.y/2 - 10) {
        if (pos.x + size.x/2 >= this.instances[i].pos.x - this.instances[i].size.x/2 && pos.x + size.x/2 <= this.instances[i].pos.x + this.instances[i].size.x/2) {
          collision.right = (pos.x + size.x/2) - (this.instances[i].pos.x - this.instances[i].size.x/2);
        }
        if (pos.x - size.x/2 <= this.instances[i].pos.x + this.instances[i].size.x/2 && pos.x - size.x/2 >= this.instances[i].pos.x - this.instances[i].size.x/2) {
          collision.left = (this.instances[i].pos.x + this.instances[i].size.x/2) - (pos.x - size.x/2);
        }
      }
      if (pos.x + size.x/2 > this.instances[i].poas.x - this.instances[i].size.x/2 + 10 && pos.x - size.x/2 < this.instances[i].pos.x + this.instances[i].size.x/2 - 10) {
        if (pos.y + size.y/2 >= this.instances[i].pos.y - this.instances[i].size.y/2 && pos.y + size.y/2 <= this.instances[i].pos.y + this.instances[i].size.y/2) {
          collision.bottom = (pos.y + size.y/2) - (this.instances[i].pos.y - this.instances[i].size.y/2);
        }
        if (pos.y - size.y/2 <= this.instances[i].pos.y + this.instances[i].size.y/2 && pos.y - size.y/2 >= this.instances[i].pos.y - this.instances[i].size.y/2) {
          collision.top = (this.instances[i].pos.y + this.instances[i].size.y/2) - (pos.y - size.y/2);
        }
      }
    }
    
    //adjust position and speed of object
    if (collision.left && !collision.right) {
      pos.x += collision.left;
      speed.x = 0;
    }
    else if (collision.right && !collision.left) {
      pos.x -= collision.right;
      speed.x = 0;
    }
    if (collision.top && !collision.bottom) {
      pos.y += collision.top;
      speed.y = 0;
    }
    else if (collision.bottom && !collision.top) {
      pos.y -= collision.bottom;
      speed.y = 0;
    }
  }
};
