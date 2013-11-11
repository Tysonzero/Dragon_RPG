var camera = {
  //camera position
  pos:{
    x:0,
    y:0,
  },
  
  //camera view area
  size:{
    x:1000,
    y:700,
  },
  
  //convert true position to position on screen
  getPos:function(pos) {
    return {x:((pos.x - this.pos.x) * game.width / this.size.x) + game.width/2, y:((pos.y - this.pos.y) * game.height / this.size.y) + game.height/2};
  },
  
  //convert true size to size on screen
  getSize:function(size) {
    return {x:size.x * game.width / this.size.x, y:size.y * game.height / this.size.y};
  },
};
