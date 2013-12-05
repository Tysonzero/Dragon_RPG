var projectile = {
	//array of Projectile objects
	instances:[],

	//Projectile prototype
	Projectile:function(pos, size, speed) {
		//objects with x and y attributes
		this.pos = pos;
		this.size = size;
		this.speed = speed;
	},
  
  //creates a new projectile
  create:function(posX, posY, sizeX, sizeY, speedX, speedY) {
    this.instances[this.instances.length] = new this.Projectile({x:posX, y:posY}, {x:sizeX, y:sizeY}, {x:speedX, y:speedY});
  },
  
  //drawing to screen
  draw:function() {
    //draw all projectiles
    for (i = 0; i < this.instances.length; i++) {
      pos = camera.getPos(this.instances[i].pos);
      size = camera.getSize(this.instances[i].size);
      game.ctx.fillStyle="#FF0000";
      game.ctx.fillRect(pos.x - size.x/2, pos.y - size.y/2, size.x, size.y);
    }
  },
};
