//Brendan Smith
//AP Computers Science
// 11 January 2019
var data = [1, 2, 3, 4, 5, 6, 7, 8];
var millisecond = millis();
text('Milliseconds \nrunning: \n' + millisecond, 5, 40);number of milliseconds since program has started displayed


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
