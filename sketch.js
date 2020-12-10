
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper(200, 200, 10);
	ground = new Ground(width/2, 700, width, 30);
	bin_bottom = new Bin(600, 690, 100, 10);
	bin_left = new Bin(550, 660, 10, 75);
	bin_right = new Bin(650, 640, 10, 200);
  
}


function draw() {
  rectMode(CENTER);
  background('cyan');
  paper.display();
  ground.display();
  bin_bottom.display();
  bin_left.display();
  bin_right.display();
  keyPressed();
  keyPressed1();
  
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.5,y:-1});
	}

}
function keyPressed1() {
	if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:3});
	}

}
