class Ball   {

  constructor(x, y, radius){
  
    var options = 
    {
      'restitution' : 0.8,
      'friction' : 1.0,
      'density' : 1.0,
    }

    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("Hexagon.jpg");
    World.add(world,this.body);
  
  }

    display()
    {
      var position = this.body.position;
      fill("pink");
      stroke("black");
      strokeWeight(1.5)
      ellipseMode(RADIUS);
      ellipse(position.x,position.y,this.radius);
    }

}