//Brendan Smith
//AP Comp Sci Principles


var data = [];
function preload(){
  data = loadJSON("population.json");
}

function setup() {
  //remove blank black screen
  noCanvas();
  bubbleSort(data);
  console.log(data.countrydata)
}

function draw() {
}

function bubbleSort(data) {
    var length = data.length;
    //number of passes
    for (var i = 0; i < length; i++) {
      
        for (var j = 0; j < (length - i - 1); j++) {
            //Compares the adjacent positions
            var a = data[j].countrydata.country;
            var b = data[j+1].countrydata.country;
            if(data[j] > data[j+1]) {
                //swaps the numbers
                //temperary variables
                var temp = data[j];
                //replace current string with adjacent string
                data[j] = data[j+1];
                //replace adjacent string with current string
                data[j+1] = temp;
            }
        }
    }
}
