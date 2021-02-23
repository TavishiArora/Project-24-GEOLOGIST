
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	hammer= new Hammer(400,300);

	ground= new Ground(400,700,800,50); 

	stone1 = new Stone(250,600,50,50);

	rubber1 = new Rubber(56,46)
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  hammer.display();

  ground.display();
 
  stone1.display();

  rubber1.display();
 
  drawSprites();
}