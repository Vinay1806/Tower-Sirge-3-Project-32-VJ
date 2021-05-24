var engine,world;
var hexaImage;
var bg;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage ="DarkImage.jpg"

function preload()
{
  getBackgroundImage();
  
 
  bg = loadImage("LightImage.jpg");
  
}

function setup() {
  createCanvas(1000,400);
  
  engine = Engine.create();
	world = engine.world;
  
  //First Platform

  box1 = new Greenbox(150,260,24,24);
  box2 = new Greenbox(175,260,24,24);
  box3 = new Greenbox(190,260,24,24);
  box4 = new Greenbox(205,260,24,24);
  box5 = new Greenbox(220,260,24,24);
  box6 = new Greenbox(234,260,24,24);

  box7 = new Yellowbox(165,245,24,24);
  box8 = new Yellowbox(175,245,24,24);
  box9 = new Yellowbox(190,245,24,24);
  box10 = new Yellowbox(205,245,24,24);
  box11 = new Yellowbox(220,245,24,24);

  box12 = new Bluebox(170,230,24,24);
  box13 = new Bluebox(185,230,24,24);
  box14 = new Bluebox(200,230,24,24);
  box15 = new Bluebox(215,230,24,24);

  box16 = new Orangebox(175,215,24,24);
  box17 = new Orangebox(190,215,24,24);
  box18 = new Orangebox(205,215,24,24);

  box39 = new Purplebox(180,200,24,24);
  box40 = new Purplebox(195,200,24,24);

  box41 = new Redbox(185,185,24,24);

//Second Platform

  box19 = new Greenbox(555,320,24,24);
  box20 = new Greenbox(567,320,24,24);
  box21 = new Greenbox(579,320,24,24);
  box22 = new Greenbox(591,320,24,24);
  box23 = new Greenbox(603,320,24,24);
  box24 = new Greenbox(615,320,24,24);

  box25 = new Yellowbox(543,296,24,24);
  box26 = new Yellowbox(580,296,24,24);
  box27 = new Yellowbox(590,296,24,24);
  box28 = new Yellowbox(600,296,24,24);
  box29 = new Yellowbox(620,296,24,24);

  box30 = new Bluebox(565,268,24,24);
  box31 = new Bluebox(575,268,24,24);
  box32 = new Bluebox(590,268,24,24);
  box33 = new Bluebox(602,268,24,24);

  box34 = new Orangebox(570,248,24,24);
  box35 = new Orangebox(585,248,24,24);
  box36 = new Orangebox(595,248,24,24);

  box37 = new Purplebox(576,228,24,24);
  box38 = new Purplebox(592,228,24,24);

  box42 = new Redbox(585,208,24,24);
  
  ground = new Ground(400,400,1200,30);
  platform1 = new Ground(195,265,200,20);
  platform2 = new Ground(585,330,200,20);
  
  ball = new Ball(90,90,20);
  
  linE = new Line(ball.body,{x : 400 , y : 200});
}

function draw() 
{

  
  if(backgroundImage)
        background(backgroundImage);
    else
    {
        background("black");
    }

  Engine.update(engine);

  ground.display();

  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
  box7.display(); 
  box8.display(); 
  box9.display(); 
  box10.display(); 
  box11.display(); 
  box12.display(); 
  box13.display(); 
  box14.display(); 
  box15.display(); 
  box16.display(); 
  box17.display(); 
  box18.display(); 
  box19.display(); 
  box20.display();
  box21.display();  
  box22.display(); 
  box23.display(); 
  box24.display(); 
  box25.display(); 
  box26.display(); 
  box27.display(); 
  box28.display(); 
  box29.display(); 
  box30.display(); 
  box31.display(); 
  box32.display(); 
  box33.display(); 
  box34.display(); 
  box35.display(); 
  box36.display(); 
  box37.display(); 
  box38.display(); 
  box39.display(); 
  box40.display(); 
  box41.display(); 
  box42.display();
  
  linE.display();
  ball.display();

  
  platform1.display();
  platform2.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body,{x : mouseX , y : mouseY})
}

function mouseReleased()
{
  linE.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    linE.attach(ball.body);
    Matter.Body.setPosition(ball.body,{x : 200 , y : 100});
  }

}

async function getBackgroundImage()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if (hour >= 0600 && hour <= 1800)
 {
  bg = "LightImage.jpg";
 }

  else 
 {
  bg = "DarkImage.jpg";
 }

 backgroundImage = loadImage(bg);
 console.log(backgroundImage);

 }
