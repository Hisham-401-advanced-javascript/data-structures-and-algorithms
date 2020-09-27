'use strict';

const { Node } = require('../tree');
const { BinaryTree } = require('../tree');
const { BinarySearchTree } = require('../tree');

describe('Binary Tree tests', () => {
  it('can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toBeDefined();
  });

  it('can successfully instantiate a tree with a single root node', () => {
    const hisham = new Node('hisham');
    const tree = new BinaryTree(hisham);
    expect(tree.root.value).toBe('hisham');
  });

  it('can successfully add a left child and right child to a single root node', () => {
    const walid = new Node('walid');
    const abdullah = new Node('abdullah');
    const ahmad = new Node('ahmad', abdullah, walid);
    const tree = new BinaryTree(ahmad);
    expect(tree.root.left.value).toBe('abdullah');
    expect(tree.root.right.value).toBe('walid');
  });

  it('can successfully return a collection from a preorder traversal', () => {
    const rawan = new Node('rawan');
    const malek = new Node('malek');
    const majd = new Node('majd');
    const yahya = new Node('yahya');
    const walid = new Node('walid', majd, yahya);
    const abdullah = new Node('abdullah', malek, rawan);
    const ahmad = new Node('ahmad', abdullah, walid);
    const tree = new BinaryTree(ahmad);
    expect(tree.preOrder()).toEqual([
      'ahmad',
      'abdullah',
      'malek',
      'rawan',
      'walid',
      'majd',
      'yahya',
    ]);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    const rawan = new Node('rawan');
    const malek = new Node('malek');
    const majd = new Node('majd');
    const yahya = new Node('yahya');
    const walid = new Node('walid', majd, yahya);
    const abdullah = new Node('abdullah', malek, rawan);
    const ahmad = new Node('ahmad', abdullah, walid);
    const tree = new BinaryTree(ahmad);
    expect(tree.inOrder()).toEqual([
      'malek',
      'abdullah',
      'rawan',
      'ahmad',
      'majd',
      'walid',
      'yahya',
    ]);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    const rawan = new Node('rawan');
    const malek = new Node('malek');
    const majd = new Node('majd');
    const yahya = new Node('yahya');
    const walid = new Node('walid', majd, yahya);
    const abdullah = new Node('abdullah', malek, rawan);
    const ahmad = new Node('ahmad', abdullah, walid);
    const tree = new BinaryTree(ahmad);
    expect(tree.postOrder()).toEqual([
      'malek',
      'rawan',
      'abdullah',
      'majd',
      'yahya',
      'walid',
      'ahmad',
    ]);
  });

  it('can successfully return the maximum numeric value within a tree', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5, three, four);
    const six = new Node(6, two, one);
    const seven = new Node(7, six, five);
    const tree = new BinaryTree(seven);
    expect(tree.postOrder()).toEqual([2, 1, 6, 3, 4, 5, 7]);
    expect(tree.findMaximumValue()).toEqual(7);
  });

  it('can successfully return the maximum numeric value within a single-node tree', () => {
    const one = new Node(1);
    const tree = new BinaryTree(one);
    expect(tree.findMaximumValue()).toEqual(1);
  });

  it('throws an exception if findMaximumValue is called on an empty tree', () => {
    const tree = new BinaryTree();
    expect(() => tree.findMaximumValue()).toThrow(RangeError);
  });
});



describe('Binary Search Tree tests', () => {
  it('can successfully instantiate an empty BinarySearchTree', () => {
    const tree = new BinarySearchTree();
    expect(tree).toBeDefined();
  });

  it('can add values to the correct location in the BinarySearchTree', () => {
    const node1 = new Node(1);
    const tree = new BinarySearchTree(node1);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    expect(tree.inOrder()).toEqual([1, 2, 3, 4]);
  });

  it('can successfully return true if a value is in the tree at least once', () => {
    const node1 = new Node(1);
    const tree = new BinarySearchTree(node1);
    console.log('TREE???', tree);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    expect(tree.contains(4)).toBe(true);
  });

  it('can successfully return false if a value is not in the tree at least once', () => {
    const node1 = new Node(1);
    const tree = new BinarySearchTree(node1);
    console.log('TREE???', tree);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    expect(tree.contains(8)).toBe(false);
  });
});
