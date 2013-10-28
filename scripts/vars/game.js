var game = {
  //declaring canvas and ctx so they can be globally accessed
  canvas:null,
  ctx:null,
  
  //use dimensions identical to size of enclosing <div>
  width:1000,
  height:700,
  
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
  
  },
  
  //drawing to screen
  draw:function() {
  
  },
};
