var dragon = {
  //dragon position
  pos:{
    x:0,
    y:0,
  },
  
  //dragon velocity
  speed:{
    x:0,
    y:0,
  },
  
  //dragon size
  size:{
    x:100,
    y:60,
  },
  
  //dragon image
  image:new Image(),
  
  //initial set up
  setup:function() {
    this.image.src = "images/dragon.png";
  },
  
  //variable manipulation
  update:function() {
  
  },
  
  //drawing to screen
  draw:function() {
    game.ctx.drawImage(this.image, 0, 0, 100, 60, game.width/2 - this.size.x/2, game.height/2 - this.size.y/2, this.size.x, this.size.y);
  },
}
