const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var forest_img;
var apple, appleImg, apple2, apple3, apple4, apple5;
var slingShot, angle;
var basket, basketImg;
var rock;

function preload() {
  //for loading Images
  forest_img = loadImage("/Assets/Forest.jpg")
  appleImg = loadImage("/Assets/Apple.png")
  basketImg = loadImage("/Assets/Basket.png")

}

function setup() {
  //for creating the Canvas
  createCanvas(700,630);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES)
  angle = 15;
  

  //for making Bodies for Apples
  apple = Bodies.rectangle(170, 150, 100, 100, { isStatic: true });
  World.add(world, apple);

  apple2 = Bodies.rectangle(260, 55, 100, 100, { isStatic: true });
  World.add(world, apple2);

  apple3 = Bodies.rectangle(370, 100, 100, 100, { isStatic: true });
  World.add(world, apple3);

  apple4 = Bodies.rectangle(470, 30, 100, 100, { isStatic: true });
  World.add(world, apple4);

  apple5 = Bodies.rectangle(560, 160, 100, 100, { isStatic: true });
  World.add(world, apple5);

  //for making the Slingshot Body
  slingShot = new SlingShot(80, 550, 200, 200, angle);

  //for making the Body for Basket
  basket = new Basket(370, 550, 150, 150, -80);

  //for making the Body for Rock
  rock = new Rock(slingShot.x - 50, slingShot.y - 30);
  
  
  
}


function draw() 
{
  //for making the background
  background(51);
  image(forest_img, 0,0,width,height);

  //for updating the engine
  Engine.update(engine);

  //for making the Apples
  push();
  translate(apple.position.x, apple.position.y);
  rotate(apple.angle);
  imageMode(CENTER);
  image(appleImg, 0, 0, 70, 70);
  pop();

  push();
  translate(apple2.position.x, apple2.position.y);
  rotate(apple2.angle);
  imageMode(CENTER);
  image(appleImg, 0, 0, 70, 70);
  pop();

  push();
  translate(apple3.position.x, apple3.position.y);
  rotate(apple3.angle);
  imageMode(CENTER);
  image(appleImg, 0, 0, 70, 70);
  pop();

  push();
  translate(apple4.position.x, apple4.position.y);
  rotate(apple4.angle);
  imageMode(CENTER);
  image(appleImg, 0, 0, 70, 70);
  pop();

  push();
  translate(apple5.position.x, apple5.position.y);
  rotate(apple5.angle);
  imageMode(CENTER);
  image(appleImg, 0, 0, 70, 70);
  pop();

  
  if(keyDown("RIGHT_ARROW")) {

    Matter.Body.setVelocity( basket.body, {x: 5, y:0} );

  }

 
  //for displaying the SlingShot
  slingShot.display();

  //for displaying rock
  rock.displayRock();

  //Matter.Body.setVelocity(basket.body, {x: 1, y:0})
  basket.displayBasket();

  
  

  //drawSprites();
}

