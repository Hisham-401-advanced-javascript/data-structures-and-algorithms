# Code Challenge 1: Reverse An Array

## Problem Domain
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach and Efficiency
I used splice to place the value in the middle of the array. By incorporating arr.length / 2 the value is added to the middle of an array. This solution only truly works for arrays with an even number of elements. I have not figured out a solution for array with an odd number.

## Solution
![array-reverse](../../assets/arrayShift.png)