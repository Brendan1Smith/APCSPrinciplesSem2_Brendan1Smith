
var balls = [];
var toggle = true;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255,255,255);
  loadBalls(100);  //  !!!!!!!!!!  this is a function call
}

function draw() {
  if(toggle===true){
  background(20,20,20,5);
  for(var i = 0; i < balls.length; i = i + 1){
    balls[i].run();
  }
}
  stop();
}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-5,5), random(-5,5));
        var radius = random(20,40);
        var col = color(0, 0, random(0,255));

        balls.push(new Ball(loc, vel, radius, col));

    }


}
 function stop(){
   if(mouseIsPressed){
     toggle=false;
   }
   else{
     toggle=true;
   }
 }
