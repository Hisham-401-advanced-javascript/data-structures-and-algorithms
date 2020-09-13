// Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
let array = [1,2,3,4,5,6];
let array1 = [];

let x = 0 ;

function reverseArray(arr){
  for (var i = arr.length -1; i> -1; i--){
    array1[x] = arr[i]
    x++;
  }
  return array1
}

reverseArray(array);

console.log(array1);
