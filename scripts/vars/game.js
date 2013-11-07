var game = {
  //declaring canvas and ctx so they can be globally accessed
  canvas:null,
  ctx:null,
  
  //use dimensions identical to size of enclosing <div>
  width:1000,
  height:700,
  
  //initial set up
  setup:function() {
    //get canvas created in html so it can be accessed
    this.canvas = document.getElementById('game_canvas');
    
    //set canvas size equal to predefined dimensions
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    
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
    this.postFrame();
  },
  
  //variable manipulation
  update:function() {
    //update objects
    dragon.update();
  },
  
  //drawing to screen
  draw:function() {
    //clear screen
    this.ctx.clearRect(0, 0, game.width, game.height);
    
    //draw objects to screen
    dragon.draw();
  },
  
  //variable manipulation at end of frame
  postFrame:function() {
    //call postFrame of other objects
    keyBoardInput.postFrame();
  },
};
