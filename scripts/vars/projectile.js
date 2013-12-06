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
  
  //variable manipulation
  update:function() {
    for (i = 0; i < this.instances.length; i++) {
      //move objects by speed
      this.instances[i].pos.x += this.instances[i].speed.x;
      this.instances[i].pos.y += this.instances[i].speed.y;
    }
  },
  
  //drawing to screen
  draw:function() {
    for (i = 0; i < this.instances.length; i++) {
      output = camera.output(this.instances[i].pos, this.instances[i].size);
      game.ctx.fillStyle="#FF0000";
      game.ctx.fillRect(output.pos.x - output.size.x/2, output.pos.y - output.size.y/2, output.size.x, output.size.y);
    }
  },
};
