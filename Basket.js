class Basket {
    constructor(x, y, width, height, basketPos) {
        var basket_options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, basket_options);
        this.width = width;
        this.height = height;

        this.image = loadImage("/Assets/Basket.png");
        this.basketPosition = basketPos;
        World.add(world, this.body);
    }

    displayBasket() {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y); 
        imageMode(CENTER);
        image(this.image, 0, this.basketPosition, this.width, this.height);
        pop();
    }
}