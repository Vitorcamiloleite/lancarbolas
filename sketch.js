
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
angle1 = 60
var btn2;
var angle = 60
var fan,fan1,fan2,fan3;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

  var particle_opitions ={
    reustution:0.4,
    frictionAir :0.02
  }
particle1 = Bodies.circle(220,10,10,plane_options)
World.add(world,particle1)
particle2 = Bodies.circle(270,10,10,plane_options)
World.add(world,particle2)
particle3 = Bodies.circle(320,10,10,plane_options)
World.add(world,particle3)


   plane = Bodies.rectangle(600,height,1200,20,plane_options);
   World.add(world,plane)

   block1=Bodies.rectangle(100,400,150,20,plane_options);
   World.add(world,block1)

   block2=Bodies.rectangle(400,400,150,20,plane_options);
   World.add(world,block2)

  rotator1 = Bodies.rectangle(250,200,150,angle1)
 World.add(world,rotator1)
 rotator3 = Bodies.rectangle(250,200,150,angle1)
 World.add(world,rotator2)
 rotator1 = Bodies.rectangle(250,200,150,angle1)
 World.add(world,rotator3)
   
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  //criar evento de clique
  btn2.mouseClicked(vForce)
  
  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball)

  ground = Bodies.rectangle(100,400,650,20,ground_options)
  World.add(world,ground)

 Matter.body.rotate(rotator1,angle1)
 push()
translate(rotator1.position.x,rotator1.position.y)
rotate(angle)
rect(0,0,150,20)
pop()
angle1 +=0.02

   fan = new Ground(50,350,10,70)
   fan1 = new Ground(150,350,10,70)
   fan2 = new Ground(250,350,10,70)
   fan3 = new Ground(350,350,10,70)









  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);

  /*Matter.Body.rotate(ground1,angle)
  push()
  translate(ground1.position.x, ground1.position.y)
  rotate(angle)
  rect(0,0,100,20)
  pop()
  angle +=0.1
  */
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20)
  fan.show()
  fan1.show()
  fan2.show()
  fan3.show()
}

//criar function vForce
function vForce(){
Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.05})

};
