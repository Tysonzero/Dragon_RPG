var projectile = {
	//array of Projectile objects
	instances:[],

	//Projectile prototype
	Projectile:function(pos, size, speed) {
		//objects with x and y attributes
		this.pos = pos;
		this.size = size;
		this.speed = speed;
	}
};
