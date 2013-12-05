var game = {
  //declaring canvas and ctx so they can be globally accessed
  canvas:null,
  ctx:null,
  
  //use dimensions identical to size of enclosing <div>
  size:{
    x:1000,
    y:700,
  },

  //initial set up
  setup:function() {
    //get canvas created in html so it can be accessed
    this.canvas = document.getElementById('game_canvas');
    
    //set canvas size equal to predefined dimensions
    this.canvas.width = this.size.x;
    this.canvas.height = this.size.y;
    
    //create context to allow drawing onto the canvas
    this.ctx = this.canvas.getContext('2d');
    
    //allows keyboard input
    keyBoardInput.initialize();

    //set up objects
    dragon.setup();
    
    //calls run() every 1/60th of a second
    this.timer = setInterval(
      function() {
        game.run();
      },
      16 + 2/3
    );
  },
  
  //run every 1/60th of a second
  run:function() {
    this.update();
    this.draw();
  },
  
  //variable manipulation
  update:function() {
    //update objects
    dragon.update();
    keyBoardInput.update();
    camera.update();
  },
  
  //drawing to screen
  draw:function() {
    //clear screen
    this.ctx.clearRect(0, 0, game.size.x, game.size.y);
    
    //draw objects
    dragon.draw();
    projectile.draw();
    platform.draw();
  },
};
