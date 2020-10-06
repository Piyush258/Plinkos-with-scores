const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var particle;
var score = 0
var count = 0;

var gameState = 1;
var start = 1;
var end = 0;

var plinkos = [];
var divisions = [];
var divisionHeight=300;



function preload(){

}

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  //the ground
  ground = new Gr(width/2,height,width,20);
  //the divisions and plinkos
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
    }
    World.add(world, divisions);
    Engine.run(engine);
}
function draw() {
  background(0);
  ground.display();
  textSize(20)
  text("Score : "+ score,20,30);
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
}
function mousePressed(){
   if (gameState !== end){
      count++;
      particle = new Particle(mouseX, 30,10,10);
   } 
   if (particle!=null){
     particle.display();
     if (particle.body.position.y > 500){
       if (particle.body.position.x < 160){
         score = score = 500;
         particle =null;
         if (count >=5){
            gameState = end;
         }
       }
     }
   }
  }
