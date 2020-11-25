
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var ball1;
var rect1;
var rect2;
var rect3;
var ballimg;
var dustbinimg;

function preload(){
ballimg = loadImage("paperimage hw25.png");
dustbinimg = loadImage("dustbingreenhw25.png");
}

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball1=new BallClass(100,100,50);
	
	rect1= new Dustclass(500,640,100,20);
	rect1.addImage("rect1",dustbinimg);
	
	rect2= new DustClass(450,600,20,100);
	rect3= new DustClass(550,600,20,100);
	ground= new DustClass(400,650,800,10);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  rect1.display();
  rect2.display();
  rect3.display();
 ground.display();
  


keyPressed();
drawSprites();

}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Body.applyForce(ball1.body,ball1.body.position,{x:10,y:-10})
	}
  }



	 
