//Brendan Smith
//AP Comp Sci Principles


var data = [];
var sortBy = "males";

function preload(){
  data = loadJSON("population.json");
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  bubble();
}

function draw() {
}

function bubble(){
  var temp;
  if(sortBy = "UrbanPop"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].total < data.countrydata[j-1].total){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  if(sortBy = "Murder"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].total < data.countrydata[j-1].total){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  if(sortBy = "Assault"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].total < data.countrydata[j-1].total){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  console.log(data);
}
