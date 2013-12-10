var projectile = {
	//array of Projectile objects
	instances:[],

	//Projectile prototype
	Projectile:function(pos, size, speed, shape) {
		//objects with x and y attributes
		this.pos = pos;
		this.size = size;
		this.speed = speed;
    this.shape = shape;
	},
  
  //creates a new projectile
  create:function(posX, posY, sizeX, sizeY, speedX, speedY, shape) {
    this.instances[this.instances.length] = new this.Projectile({x:posX, y:posY}, {x:sizeX, y:sizeY}, {x:speedX, y:speedY}, shape);
  },
  
  //variable manipulation
  update:function() {
    for (var i = 0; i < this.instances.length; i++) {
      //move objects by speed
      this.instances[i].pos.x += this.instances[i].speed.x;
      this.instances[i].pos.y += this.instances[i].speed.y;
      
      //check for collision
      platform.collide(this.instances[i].pos, this.instances[i].size, this.instances[i].speed, this.instances[i].shape);
    }
  },
  
  //drawing to screen
  draw:function() {
    for (var i = 0; i < this.instances.length; i++) {
      output = camera.output(this.instances[i].pos, this.instances[i].size);
      game.ctx.fillStyle="#FF0000";
      game.ctx.fillRect(output.pos.x - output.size.x/2, output.pos.y - output.size.y/2, output.size.x, output.size.y);
    }
  },
};
