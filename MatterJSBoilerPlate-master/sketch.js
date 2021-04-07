// the constrained bodies from Mattter.js ...

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//the preload function to load the images...

function preload() {
	boy=loadImage("images/boy.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//creating the objects for the game inheriting the properties of their respective classes...

	stoneObj=new Stone(235,420,30); 

	mango1=new Mango(1100,100,30);
  mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1120,50,40);
	mango12=new Mango(900,160,40);

	treeObj=new Tree(1050,580);

	groundObject=new Ground(width/2,600,width,20);

	slingshotObject=new Slingshot(stoneObj.body,{x:235,y:420});
	
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 
}


function draw() {
	background("pink");

	//the text and the image for the boy's position...

	textSize(25);
	text("Press Space to Play for the second time!!!",50 ,50);
	image(boy ,200,340,200,300);
	
	//the display function to display all the objects in the game...
  
	treeObj.display();
	stoneObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango6.display();
   mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	stoneObj.display();
  
	groundObject.display();
	slingshotObject.display();

	//the detect collision function to detect the collision of the stoneObject with the mangoes...

	detectollision(stoneObject,mango1);
	detectollision(stoneObject,mango2);
	detectollision(stoneObject,mango3);
	detectollision(stoneObject,mango4);
	detectollision(stoneObject,mango5);
	detectollision(stoneObject,mango6);
	detectollision(stoneObject,mango7);
	detectollision(stoneObject,mango8);
	detectollision(stoneObject,mango9);
	detectollision(stoneObject,mango10);
	detectollision(stoneObject,mango11);
	detectollision(stoneObject,mango12);
  }

  //function mouse dragged to be set as the main control of my game...
  
  function mouseDragged() {
  
	  Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
  }

  // function to be execuyed after mouse is released to disable the controls of my game...

  function mouseReleased() {
  slingshotObject.fly();
	   }
  
//the keypressed function to attach the stone to the slingshot...

  function keyPressed() {
	  if (keyCode === 32) {
	  Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
		slingshotObject.attach(stoneObj.body);
	  }
	}
  
	//the function to detect the collisions and work accordingly...

	function detectollision(lstone,lmango){
	  
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
		if(distance<=lmango.r+lstone.r) {
	 Matter.Body.setStatic(lmango.body,false);
	  }
  
	}


