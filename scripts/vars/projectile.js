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
};
