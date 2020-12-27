var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,packageBody1,packageBody2,ground;
var rectSprite ,rect2Sprite,rect3Sprite;
var packageSprite2,packageSprite3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageSprite2=createSprite(width/2,80,10,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale= 0.2;

	packageSprite3=createSprite(width/2,80,10,10);
	packageSprite3.addImage(packageIMG)
	packageSprite3.scale= 0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	rectSprite=createSprite(width/2,height-50,300,40);
	rectSprite.shapeColor=color("red");
	rectSprite.scale= 0.5;

	rect2Sprite=createSprite(315,height-90,20,100);
	rect2Sprite.shapeColor=color("red");
	rectSprite.scale= 0.5;
	
	rect3Sprite=createSprite(475,height-90,20,100)
	rect3Sprite.shapeColor=color("red");
	rect3Sprite.scale=1;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.85, isStatic:true});
	World.add(world, packageBody);
	
	packageBody1 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.85, isStatic:true});
	World.add(world, packageBody1);

	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.85, isStatic:true});
	World.add(world, packageBody2);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite2.x= packageBody1.position.x 
  packageSprite2.y= packageBody1.position.y 

  packageSprite3.x= packageBody2.position.x 
  packageSprite3.y= packageBody2.position.y 
 
 packageSprite.collide(rectSprite);
 packageSprite.collide(rect2Sprite);
 packageSprite.collide(rect3Sprite);

 packageSprite2.collide(rectSprite);
 packageSprite2.collide(rect2Sprite);
 packageSprite2.collide(rect3Sprite);

 packageSprite3.collide(rectSprite);
 packageSprite3.collide(rect2Sprite);
 packageSprite3.collide(rect3Sprite);

  drawSprites();
 
}

function keyPressed() {
 
     
if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(packageBody1,false);
	Matter.Body.setStatic(packageBody2,false);
	  }
    
  }




