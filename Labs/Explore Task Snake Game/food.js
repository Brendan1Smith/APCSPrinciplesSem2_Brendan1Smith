//Brendan Smith

//food function
function Food(loc){
//gives the food a random location
  this.loc = loc;

  this.run = function(){
    this.render();
  }
//renders the food on the screen
  this.render = function(){
    fill(255, 0, 0);
    stroke(255);
    rect(this.loc.x, this.loc.y, 20, 20);
    stroke(121, 139, 19);
  }

}
