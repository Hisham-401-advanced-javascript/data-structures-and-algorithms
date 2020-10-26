'use strict';

const { BreadthFirstGraph } = require('../breadth-first');
const { Graph } = require('/mnt/c/Users/Dell/projects/401/data-structures-and-algorithms/Data-Structures/graph/graph.js');


it('should return all vertices', () => {
  const graph = new BreadthFirstGraph();
  let node1 = Graph.addNode('hello');
  let node2 = Graph.addNode('there');
  let node3 = Graph.addNode('!!!');
  let node4 = Graph.addNode('???');
  Graph.addEdge(node1, node2);
  Graph.addEdge(node1, node3);
  Graph.addEdge(node2, node3);
  Graph.addEdge(node3, node4);
  let result = graph.breadthFirst(node1);
  expect(result).toEqual([
    { value: 'hello' },
    { value: 'there' },
    { value: '!!!' },
    { value: '???' }
  ]);
});
