var platform = {
  //array of Platform objects
  instances:[],

  //Platform prototype
	Platform:function(pos, size){
    //objects with x and y attributes
		this.pos = pos;
		this.size = size;
	},
};
