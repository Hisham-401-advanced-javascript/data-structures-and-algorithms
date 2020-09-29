'use strict';

class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
    this.queue = [];
  }
  enqueue(val){
    this.queue.push(val);
    this.front = this.queue[0];
    this.rear = val;
  }
  dequeue(){
    return this.queue.shift();
  }
}

function breadthFirst(tree){
  let que = new Queue();
  let arr = [];
  que.enqueue(tree.root);
  while(que.queue.length){
    let front = que.dequeue();
    arr.push(front.value);
    if(front.left){
      que.enqueue(front.left)
    }
    if(front.right){
      que.enqueue(front.right)
    }
  }
  return arr;
}

module.exports = { Node, Tree, Queue, breadthFirst }
