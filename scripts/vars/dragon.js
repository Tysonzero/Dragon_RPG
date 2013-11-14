var dragon = {
  //dragon direction
  direction:{
    x:1,
    y:0,
  },

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
    //calls run function
    this.run();
    
    //calls jump function
    this.jump();
    
    //calls gravity function
    this.gravity();
    
    //move dragon by speed
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  },
  
  //drawing to screen
  draw:function() {
    pos = camera.getPos(this.pos);
    size = camera.getSize(this.size);
    game.ctx.drawImage(this.image, 50 + (50*this.direction.x), 0, 100, 60, this.pos.x - this.size.x/2, this.pos.y - this.size.y/2, this.size.x, this.size.y);
  },
  
  //run left and right
  run:function() {
    if (keyBoardInput.key[65] && !keyBoardInput.key[68]) {
      this.speed.x = -2;
      this.direction.x = -1;
    }
    else if (keyBoardInput.key[68] && !keyBoardInput.key[65]) {
      this.speed.x = 2;
      this.direction.x = 1;
    }
    else {
      this.speed.x = 0;
    }
  },
  
  //jump upwards
  jump:function() {
    if (keyBoardInput.key[87] && !keyBoardInput.lastKey[87]) {
      this.speed.y = -5;
    }
  },
  
  //fall downwards
  gravity:function() {
    this.speed.y += 0.1;
  },
};
