//Brendan Smith
//AP Comp Sci Principles


var data 
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
function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value
  }

  return list
}

function selectionSort(items){
    var len = items.length,
        min;
    for (i=0; i < len; i++){
        //set minimum to this position
        min = i;
        //check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }
        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(items, i, min);
        }
    }

    return items;
}
