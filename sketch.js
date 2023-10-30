
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var body1;
var body2;
var body3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic : true
	}
	var body1_options={
		restitution:0.9,
		frictionAir:0.05
	}
	var body2_options={
		restitution:0.20,
		frictionAir:0.3
	}
	var body3_options={
		restitution:1.3,
		frictionAir:0.010,
	}

	plane = Bodies.rectangle(500,800,800,20,plane_options);
	World.add(world,plane);
	body1 = Bodies.circle(200,0,40,body1_options);
	World.add(world,body1);
	body2 = Bodies.rectangle(400,0,100,100,body2_options);
	World.add(world,body2);
	body3 = Bodies.circle(600,0,25,body3_options);
	World.add(world,body3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(47,79,79);
  Engine.update(engine);
	ellipse(body1.position.x,body1.position.y,40);
	rect(plane.position.x,plane.position.y,800,20);
	rect(body2.position.x,body2.position.y,100,100);
	ellipse(body3.position.x,body3.position.y,25);
  drawSprites();
 
}



