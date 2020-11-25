
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var slingShot;
var cloud1, cloud2;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1050,350);
	ground = new Ground(600,690,1200,10);
	boy = new Boy(350,500);
	stone = new Stone(385,555,50,50);
	mango1 = new Mango(1000,250,50,50);
	mango2 = new Mango(1080,150,50,50);
	mango3 = new Mango(940,150,50,50);
	mango4 = new Mango(1080,320,50,50);
	mango5 = new Mango(910,370,50,50);
	
	slingShot = new SlingShot(stone.body,{x:400, y:560});

	cloud1 = new Cloud(200,100,300,100);
	cloud2 = new Cloud(600,100,300,100);

}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);
  
 tree.display();
 ground.display();
 boy.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 slingShot.display();
 cloud1.display();
 cloud2.display();


 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4);
 detectollision(stone,mango5);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}


function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.width+lstone.width){
		Matter.Body.setStatic(lmango.body,false);
		textSize(40);
		text("MANGO TIME",50,500);
	}
}

function keyPressed(){
	if(keyCode === 32){
		slingShot.attach(stone.body);
	}
}


