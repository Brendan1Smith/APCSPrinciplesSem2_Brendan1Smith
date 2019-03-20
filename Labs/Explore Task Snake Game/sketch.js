//Brendan Smith
//AP Comp Sci Principles
//Snake Game
// global variables
var snake;
var food = [];
var numSeg = 1;
var start = "true"
var font;
var score = 0;
//setup function fot the canvas
function setup(){
  textAlign(CENTER, CENTER);
  frameRate(10);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(121, 139, 19);
  loadSnake();
  loadFood(1);
}
// draws the snake and food every frame
function draw(){
  background(0, 0, 225);
  snake.run();
  fill(200, 25, 100)
  textSize(30);
  text(score, 100, 100);
  for(var i = 0; i < food.length; i++){
    food[i].run();
  }

  checkLoc();
  deadGame();
  gameStart();
  Score();
}

function checkLoc(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      food.splice(i, 1);
      loadFood(1);
      snake.segments.push(createVector(0, 0));
      score = score + 1

    }
  }
}
// adds velocity to the snake
function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}
// loads the food on the canvas
function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 39;
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}
//this gives the snake directin based on the arrows
function keyPressed(){
  start = "false"
  if(keyCode === 38){
    snake.vel = createVector(0, -20)
  }
  if(keyCode === 40){
    snake.vel = createVector(0, 20)
  }
  if(keyCode === 39){
    snake.vel = createVector(20, 0)
  }
  if(keyCode === 37){
    snake.vel = createVector(-20, 0)
  }
}
// kills the snake if it touches itself
function deadGame(){
  if(snake.status == "true"){
    snake = 0
    score = 0;
    text("Game Over Bud, Refresh To Try Again", 400, 400)
    loadSnake();
    gameStart();
    gameOver();
  }
}
// splash screen
function gameStart(){
  if(start == "true"){
    textFont()
    fill(220, 220, 220);
    textAlign(CENTER);
    textSize(75);
    text("Snikity Snake Game", 400, 300)
    textSize(20);
    text("Press any button to start", 400, 550)
  }
}
// score code
function Score(){
  if (score > 15){
    fill(25, 200, 5);
    text("Congrats Buddy You Won!", 400, 400);
  }
}
