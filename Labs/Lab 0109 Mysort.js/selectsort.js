//Brendan Smith
//AP Comp Sci Principles
// 11 January 2018
var txt = [];
function preload(){
  txt = loadStrings("words.txt");
}

var data = [1, 2, 3, 4, 5, 6, 7, 8];
var millisecond = millis();
text('Milliseconds \nrunning: \n' + millisecond, 5, 40);number of milliseconds since program has started displayed


function setup() {

  noCanvas();
  console.log(txt);
  bubbleSort(txt);
}

function draw() {
}

function bubbleSort(txt) {
    var length = txt.length;

    for (var i = 0; i < length; i++) {

        for (var j = 0; j < (length - i - 1); j++) {

            if(txt[j] > txt[j+1]) {

                var temp = txt[j];

                txt[j] = txt[j+1];

                txt[j+1] = temp;
                console.log(txt);
            }
        }
    }
}
