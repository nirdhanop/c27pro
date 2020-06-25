var helicopterIMG, helicopterSprite, packageSprite,packageIMG,dropBox,dropBoxL,dropBoxR;
var packageBody,ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	dropBox=createSprite(645,660,200,20)
	dropBoxL=createSprite(550,610,20,100)
	dropBoxR=createSprite(750,610,20,100)
 
    ball1 = new paper(200,640,Option,); 
	
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  drawSprites();
 
}



