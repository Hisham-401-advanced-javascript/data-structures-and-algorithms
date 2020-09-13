
const insertShiftArray = (arr, value) => {
  let middle = Math.ceil(arr.length / 2);
  let newArr = [];
  let i;

  for (i = 0; i < middle; i++) {
    newArr[i] = arr[i];
  }
  if (i === middle) {
    newArr[i] = value;
    i++;
  }
  for (i = middle+1; i < arr.length+1; i++) {
    newArr[i] = arr[i-1];
  }
  return newArr ;
}


module.exports = insertShiftArray;
