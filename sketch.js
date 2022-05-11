
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//1st - create eNGINE--creating environment of physics
//2nd- create World -- creating canvas
//3rd -  create Body -- creating sprite

let engine;
var ball;let world;
var ground;
var rock
var top_wall
var left_wall
var right_wall
var leaf

function setup()
{


  createCanvas(400,400);
  //creating engine for game
  engine = Engine.create()
  //world inside our game's engine
  world=engine.world
    

leaf = createImg('leaf.png')
leaf.position(220,30)
leaf.size(50,50)
leaf.mouseClicked(vForce)
  
  //creating body inside our game's world
  var ball_options={
    restitution:1
  }

  ball= Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)

  
  ground= new Ground(200,390,400,20)
  top_wall = new Ground(200,10,20,400)
  left_wall = new Ground(20,200,20,400)
  right_wall = new Ground(300,200,20,400)
  
                    //390,200,20,400                     
}

function draw() 
{
  
  background(118);
  //to update physics engine
 

  ellipse(ball.position.x,ball.position.y,20)

ground.show()
top_wall.show()
left_wall.show()
right_wall.show()



Engine.update(engine)
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

}