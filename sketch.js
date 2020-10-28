const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(250,300, 40);
	bobObject2 = new Bob(291,300, 40);
	bobObject3 = new Bob(332,300, 40);
    bobObject4 = new Bob(373,300, 40);
	bobObject5 = new Bob(414,300, 40);

	roof = new Roof(382,100);

	rope1=new Rope(bobObject1.body,roof.body,-80,0);
  rope2=new Rope(bobObject1.body,roof.body,-40,0);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}



