var camera = {
    //camera view
    view: "dragon",

    //camera position
    pos: {
        x: 0,
        y: 0,
    },

    //camera view area
    size: {
        x: 1000,
        y: 700,
    },

    //variable manipulation
    update: function() {
        switch(this.view) {
            case "dragon":
                this.pos.x = dragon.pos.x;
                this.pos.y = dragon.pos.y;
                break;
        }
    },

    //convert true position to position on screen
    output: function(pos, size) {
        return {
            pos: {
                x: ((pos.x - this.pos.x) * game.size.x / this.size.x) + game.size.x/2,
                y: ((pos.y - this.pos.y) * game.size.y / this.size.y) + game.size.y/2,
            },
            size: {
                x: size.x * game.size.x / this.size.x,
                y: size.y * game.size.y / this.size.y,
            },
        };
    },

    //convert position on screen to true position
    input: function(pos, size) {
        return {
            pos: {
                x: ((pos.x - game.size.x/2) * this.size.x / game.size.x) + this.pos.x,
                y: ((pos.y - game.size.y/2) * this.size.y / game.size.y) + this.pos.y,
            },
            size: {
                x: size.x * this.size.x / game.size.x,
                y: size.y * this.size.y / game.size.y,
            },
        };
    },
};
