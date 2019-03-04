/**
**  Ball Constructor Function
**  Brendan Smith
**  26 Feburary 2019
*/

function Ball(location, velocity, radius, col){
  // Instance Variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;

  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function(){
    if(this !== chaser){
      //if this is less than 250 away from ball
      //attract:: accelerate towards ball
      var d = this.loc.dist(chaser.loc)
      if(d<450){
        var attForce = p5.Vector.sub(chaser.loc, this.loc);
        attForce.normalize();
        attForce.mult(.01);
        this.vel.add(attForce)
      }
      //if this is less than 85 away from ball
      //repel:: accelerate away from ball
      if(d < 85){
        var repForce = p5.Vector.sub( this.loc, chaser.loc,);
        repForce.normalize();
        repForce.mult(.75);
        this.vel.add(repForce)
      }
    }
    this.vel.limit(3);
    this.loc.add(this.vel);

  }

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x
    if(this.loc.x > width) this.vel.x = -this.vel.x
    if(this.loc.y < 0) this.vel.y = -this.vel.y
    if(this.loc.y > height) this.vel.y = -this.vel.y

  }
  // render () draws the ball at the new location
  this.render = function (){
    fill(this.col);
    ellipse(this.loc.x,this.loc.y, this.rad, this.rad)
    stroke(150, 241, 220);
    line(this.loc.x, this.loc.y,balls[0].loc.x, balls [0].loc.y);
    stroke(150, 241, 220);
    line(this.loc.x, this.loc.y,balls[0].loc.x, balls [0].loc.y);
    stroke(150, 241, 220);
    line(this.loc.x, this.loc.y,balls[0].loc.x, balls [0].loc.y);
    stroke(150, 241, 220);
    line(this.loc.x, this.loc.y,balls[0].loc.x, balls [0].loc.y);
  }
}
var orbiter
