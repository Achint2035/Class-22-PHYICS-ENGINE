const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var MyEngine, MyWorld;
var Ball1;
var ground;
function setup() {
  createCanvas(400,400);
  MyEngine = Engine.create();
  MyWorld = MyEngine.world;

  Ball1 = Bodies.circle(200,100,20,{restitution:1.2});
  World.add(MyWorld,Ball1);

ground = Bodies.rectangle(200,380,400,20,{isStatic:true});
World.add(MyWorld,ground);
}

function draw() {
  background("lightblue");  
  Engine.update(MyEngine);
  ellipseMode(RADIUS);
  ellipse(Ball1.position.x, Ball1.position.y,20,20);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
}