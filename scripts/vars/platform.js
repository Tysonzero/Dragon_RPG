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
    for (var i = 0; i < this.instances.length; i++) {
      output = camera.output(this.instances[i].pos, this.instances[i].size);
      game.ctx.fillStyle = "#000000";
      game.ctx.fillRect(output.pos.x - output.size.x/2, output.pos.y - output.size.y/2, output.size.x, output.size.y);
    }
  },
  
  //adjust object if a collision occurs
  collide:function(pos, size, speed, shape) {
    //object containing depth of object collision
    var collision = {
      left:0,
      right:0,
      top:0,
      bottom:0,
      any:false,
    };
    
    //check if object collides with any platform
    for (var i = 0; i < this.instances.length; i++) {
      switch(shape) {
        case "rect":
          if (pos.y + size.y/2 > this.instances[i].pos.y - this.instances[i].size.y/2 + size.y/10 && pos.y - size.y/2 < this.instances[i].pos.y + this.instances[i].size.y/2 - size.y/10) {
            if (pos.x + size.x/2 >= this.instances[i].pos.x - this.instances[i].size.x/2 && pos.x + size.x/2 <= this.instances[i].pos.x + this.instances[i].size.x/2) {
              collision.right = Math.max((pos.x + size.x/2) - (this.instances[i].pos.x - this.instances[i].size.x/2), collision.right);
              collision.any = true;
            }
            if (pos.x - size.x/2 <= this.instances[i].pos.x + this.instances[i].size.x/2 && pos.x - size.x/2 >= this.instances[i].pos.x - this.instances[i].size.x/2) {
              collision.left = Math.max((this.instances[i].pos.x + this.instances[i].size.x/2) - (pos.x - size.x/2), collision.left);
              collision.any = true;
            }
          }
          if (pos.x + size.x/2 > this.instances[i].pos.x - this.instances[i].size.x/2 + size.x/10 && pos.x - size.x/2 < this.instances[i].pos.x + this.instances[i].size.x/2 - size.x/10) {
            if (pos.y + size.y/2 >= this.instances[i].pos.y - this.instances[i].size.y/2 && pos.y + size.y/2 <= this.instances[i].pos.y + this.instances[i].size.y/2) {
              collision.bottom = Math.max((pos.y + size.y/2) - (this.instances[i].pos.y - this.instances[i].size.y/2), collision.bottom);
              collision.any = true;
            }
            if (pos.y - size.y/2 <= this.instances[i].pos.y + this.instances[i].size.y/2 && pos.y - size.y/2 >= this.instances[i].pos.y - this.instances[i].size.y/2) {
              collision.top = Math.max((this.instances[i].pos.y + this.instances[i].size.y/2) - (pos.y - size.y/2), collision.top);
              collision.any = true;
            }
          }
          break;
        case "circle":
          if (pos.y > this.instances[i].pos.y - this.instances[i].size.y/2 && pos.y < this.instances[i].pos.y + this.instances[i].size.y/2) {
            if (pos.x + size.x/2 >= this.instances[i].pos.x - this.instances[i].size.x/2 && pos.x + size.x/2 <= this.instances[i].pos.x + this.instances[i].size.x/2) {
              collision.right = Math.max((pos.x + size.x/2) - (this.instances[i].pos.x - this.instances[i].size.x/2), collision.right);
              collision.any = true;
            }
            if (pos.x - size.x/2 <= this.instances[i].pos.x + this.instances[i].size.x/2 && pos.x - size.x/2 >= this.instances[i].pos.x - this.instances[i].size.x/2) {
              collision.left = Math.max((this.instances[i].pos.x + this.instances[i].size.x/2) - (pos.x - size.x/2), collision.left);
              collision.any = true;
            }
          }
          if (pos.x > this.instances[i].pos.x - this.instances[i].size.x/2 && pos.x < this.instances[i].pos.x + this.instances[i].size.x/2) {
            if (pos.y + size.y/2 >= this.instances[i].pos.y - this.instances[i].size.y/2 && pos.y + size.y/2 <= this.instances[i].pos.y + this.instances[i].size.y/2) {
              collision.bottom = Math.max((pos.y + size.y/2) - (this.instances[i].pos.y - this.instances[i].size.y/2), collision.bottom);
              collision.any = true;
            }
            if (pos.y - size.y/2 <= this.instances[i].pos.y + this.instances[i].size.y/2 && pos.y - size.y/2 >= this.instances[i].pos.y - this.instances[i].size.y/2) {
              collision.top = Math.max((this.instances[i].pos.y + this.instances[i].size.y/2) - (pos.y - size.y/2), collision.top);
              collision.any = true;
            }
          }
          //FINISH CIRCLE COLLISION
          break;
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
    
    return collision.any;
  },
  
  //check if object is standing on a platform
  standing:function(pos, size) {
    for (i = 0; i < this.instances.length; i++) {
      if (pos.x + size.x/2 > this.instances[i].pos.x - this.instances[i].size.x/2 + 10 && pos.x - size.x/2 < this.instances[i].pos.x + this.instances[i].size.x/2 - 10) {
        if (pos.y + size.y/2 == this.instances[i].pos.y - this.instances[i].size.y/2) {
          return true;
        }
      }
    }
  },
};
