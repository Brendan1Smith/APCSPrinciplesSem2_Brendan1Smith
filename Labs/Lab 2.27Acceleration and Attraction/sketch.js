// Global variables
var balls = [];
//var chaser;
// put the setup code here
function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  //background(80,80,80)
  chaser = new Ball(createVector(width/2, height/2), createVector(0,0), 25, color(255,255,255));
  loadBalls(16);
}

function draw(){

  //background(20,20,20);
  chaser.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run()
  }

}
var num = 12
function loadBalls(numBalls){

  for(var i = 0;i < numBalls;i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-8,8), random(-8,8));
    var radius = random(20,40);
    var col = color(random(255), random(255), random (255));
    balls.push(new Ball(loc, vel, radius, col));
  }
console.log(balls);
}
