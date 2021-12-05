class Rock {
    constructor(x, y) {

        

        this.r = 30;
        this.body = Bodies.circle(x, y, this.r);
        this.image = loadImage("/Assets/Rock.png");
        World.add(world, this.body);
    }

    displayRock() {
        var pos = this.body.position;
        Matter.Body.setStatic(this.body, true);

        

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    }
}
