
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    ground = new Ground(400, 690, 800, 20);
	tree = new Tree(550, 450, 350, 500);
	
	Getit = new Stone(200, 540, 30, 30);

	mango1 = new Mango(540, 260, 40);
	mango2 = new Mango(580, 280, 40);
	mango3 = new Mango(500, 340, 40);
	mango4 = new Mango(530, 400, 40);
	mango5 = new Mango(650, 380, 40);
	
    
    boy = new Boy(210, 600, 180, 300);

	slingshot = new SlingShot(Getit.body, {x : 200, y : 540})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  tree.display();
  Getit.display();
  boy.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(Getit, mango3);
}

function mouseDragged(){
   Matter.Body.setPosition(Getit.body, {x : mouseX, y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function detectCollision(Getit, mango3){
  mango3.position = mango3.body.position;
  Getit.position = Getit.body.position;
  
  var distance = dist(Getit.x, Getit.y, mango3.x, mango3.y);
  if(distance <= Getit.r + mango3.r){
	  Matter.Body.setStatic(mango3.body, false);
  }
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(Getit.body, {x : 200, y : 540});
		slingshot.attach(Getit.body);
	}

}