# Code Challenge 1: Reverse An Array

## Problem Domain
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
Define a method called toString (or str in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"
Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

## Challenge #2

* .append(value) which adds a new node with the given value to the end of the list
* .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
* .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node


## Approach & Efficiency
I applied the information I gathered through my reading assignments and class demonstration to build ths application. 

## API
* Insert() - Takes a value and adds a new node with the value to the head of the list
* Includes() - Takes a value and returns a boolean result depending on if the value exists as a Node value in the list
* toString() - Returns a string representing all values in the list
* Append() - Takes a value and adds to the end of the Linked List
* insertBefore() - Takes a value and adds it before a target value
* insertAfter() - Takes a value and adds it after a target value

## Solution
[linked-List](https://github.com/Hisham-401-advanced-javascript/data-structures-and-algorithms/blob/master/Data-Structures/linkedList/linked-list.js)

# Whiteboard : 

![WB](./C-06-whiteboard.png)