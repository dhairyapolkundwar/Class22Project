const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var Ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true
  }
  var ball_options = {
    restitution: 1.0
  }


  Ground = Bodies.rectangle(200, 390, 400, 20, options)
  World.add(world,Ground);
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(Ground.position.x, Ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  drawSprites();
}