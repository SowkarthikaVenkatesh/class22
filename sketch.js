const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body;

function setup() {
  createCanvas(windowWidth,windowHeight);
 
  engine = Engine.create();
  world = engine.world;

  var body_options={
    isStatic: false,
    speed: 10,
    restitution: 1
  }
  box = Bodies.rectangle(300,100,100,100,body_options);
  World.add(world,box);

  console.log(body1);
}

function draw() {
  background("pink");  
  Engine.update(engine);
  rect(body1.position.x,body1.position.y,100,100);
}