// Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing
//  any of the built-in methods available to your language, return the index of the array’s element that is equal to the
//  search key, or -1 if the element does not exist.

// Stretch Goal - Once you’ve achieved a working solution, benchmark with varying array sizes
// (100, 10000, 100000 elements)

function binarySearch(arr, key){
  let firstPlace = 0;
  let lastPlace = arr.length-1;
  while(lastPlace>=firstPlace){
    let middle = Math.floor((firstPlace + lastPlace)/2);
    if(key === arr[middle]){
      return middle;
    }
    if(key<arr[middle]){
      lastPlace = middle-1;
    }
    else {
      firstPlace = middle+1;
    }
  }
  return -1;
}


module.exports = binarySearch;
