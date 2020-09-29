'use strict';

const {Node} = require('../breadth-first.js');
const {BinaryTree} = require('../tree.js');
const {breadthFirst} = require('../breadth-first.js');

describe('Breadth First', () => {
  it('should return expected output on a balanced tree', () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3, one, two);
    let six = new Node(6);
    let seven = new Node(7);
    let five = new Node(5, six, seven);
    let four = new Node(4, three, five);

    let tree = new BinaryTree(four);
    expect(breadthFirst(tree)).toStrictEqual([4,3,5,1,2,6,7]);
  });

  it('should return expected output on a unbalanced tree', () => {
    let four = new Node(4);
    let five = new Node(5);
    let two = new Node(2, four, five);
    let six = new Node(6);
    let three = new Node(3, six);
    let one = new Node(1, two, three);

    let tree = new BinaryTree(one);
    expect(breadthFirst(tree)).toStrictEqual([1,2,3,4,5,6]);
  });
})
