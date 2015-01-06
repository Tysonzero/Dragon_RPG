var dragon = {
    //dragon direction
    direction: {
        x: 1,
        y: 0,
    },

    //dragon position
    pos: {
        x: 0,
        y: 0,
    },

    //dragon velocity
    speed: {
        x: 0,
        y: 0,
    },

    //dragon size
    size: {
        x: 100,
        y: 60,
    },

    //dragon shape
    hitbox: {
        ratio: 1,
        shape: "rect",
    },

    //dragon image
    image: new Image(),

    //initial set up
    setup: function () {
        this.image.src = "images/dragon.png";
    },

    //variable manipulation
    update: function () {
        //calls run function
        this.run();

        //calls jump function
        if (platform.standing(this.pos, this.size)) {
            this.jump();
        }

        //calls gravity function
        this.gravity();

        //use abilities
        this.ability();

        //move dragon by speed
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;

        //check for collision
        platform.collide(this.pos, utils.scaleVector(this.size, this.hitbox.ratio), this.speed, this.hitbox.shape);
    },

    //drawing to screen
    draw: function () {
        output = camera.output(this.pos, this.size);
        game.ctx.drawImage(this.image, 50 + (50*this.direction.x), 0, 100, 60, output.pos.x - output.size.x/2, output.pos.y - output.size.y/2, output.size.x, output.size.y);
    },

    //run left and right
    run: function () {
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
    jump: function () {
        if (keyBoardInput.key[87] && !keyBoardInput.lastKey[87]) {
            this.speed.y = -5;
        }
    },

    //fall downwards
    gravity: function () {
        this.speed.y += 0.1;
    },

    //use abilities
    ability: function () {
        //launch projectile if mouse is pressed
        if (mouseInput.pressed) {
            var offset = {
                x: mouseInput.pos.x - this.pos.x - 50 * this.direction.x,
                y: mouseInput.pos.y - this.pos.y + 5,
            };
            var distance = Math.pow(Math.pow(offset.x, 2) + Math.pow(offset.y, 2), 0.5);
            projectile.create(this.pos.x + 50 * this.direction.x, this.pos.y - 5, 30, 30, 5 * offset.x / distance, 5 * offset.y / distance, {ratio: 2/3, shape: "circle"});
        }
    },
};
