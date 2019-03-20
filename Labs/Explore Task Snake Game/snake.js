
//Brendan Smith
//AP Comp Sci Principles
//Snake Game
//defines the snake and its parameters
function Snake(loc, vel){

  this.loc = loc;
  this.vel = vel;
  this.segments = [];
  this.status = "false";
//run funtion allows snake to die and render
  this.run = function(){
    this.update();
    this.render();
    this.dead();
  }
//thi part adds the segments to the snake
  this.update = function(){
    for(var i = this.segments.length - 1; i >= 0; i--){
      if(i > 0){
        this.segments[i].x = this.segments[i-1].x;
        this.segments[i].y = this.segments[i-1].y;
      }else{
        this.segments[0].x = this.loc.x;
        this.segments[0].y = this.loc.y;
      }
    }
    // constrains snake to the canvas
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, 800-20)
    this.loc.y = constrain(this.loc.y, 0, 800-20)
  }

  this.render = function(){
    for(var i = 0; i < this.segments.length; i++){
      fill(0, 0, 0);
      stroke(0, 225, 225);
      rect(this.segments[i].x, this.segments[i].y, 20, 20)
    }
    //colors the snake
    fill(255, 0, 220);
    rect(this.loc.x, this.loc.y, 20, 20);
  }
// snake is dead
  this.dead = function(){
    for(var i = 0; i < this.segments.length; i++){
      var distX = this.loc.x - this.segments[i].x;
      var distY = this.loc.y - this.segments[i].y;
      if((distX == 0) && (distY == 0)){
        this.status = "true";
        console.log(this.status);
      }
    }
  }
}
