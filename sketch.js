
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground;
var angle=60;
var wedge;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var wedge_options= {
    isStatic: true
  }


   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
   wedge = Bodies.rectangle(150,200,140,15,wedge_options);
   World.add(world,wedge);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20,20);
  rect(ground.position.x,ground.position.y,400,20);

  Body.rotate(wedge,angle)
  push()
  translate(wedge.position.x,wedge.position.y)
  rotate(angle)
  rect(0,0,140,15);
  pop()
  angle = angle +0.1
  


  
  
}

