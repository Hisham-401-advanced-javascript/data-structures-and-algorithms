'use strict';

const PseudoQueue = require('./queue-with-stacks');

describe('PseudoQueue tests', () => {
  it('can successfully instantiate an empty PseudoQueue (with two empty stacks)', () => {
    const pq = new PseudoQueue();
    expect(pq).toBeDefined;
    expect(pq.stack1.isEmpty()).toBe(true);
    expect(pq.stack2.isEmpty()).toBe(true);
  });

  it('can successfully enqueue a value into an empty PseudoQueue', () => {
    const pq = new PseudoQueue();
    pq.enqueue('hisham');
    expect(pq.stack1.peek()).toBe('hisham');
  });

  it('can successfully enqueue a value into a non-empty PseudoQueue', () => {
    const pq = new PseudoQueue();
    pq.enqueue('hisham');
    pq.enqueue('abdullah');
    pq.enqueue('ali');
    expect(pq.stack1.peek()).toBe('ali');
  });

  it('can successfully dequeue a value from PseudoQueue in the correct order', () => {
    const pq = new PseudoQueue();
    pq.enqueue('hisham');
    pq.enqueue('abdullah');
    pq.enqueue('ali');
    expect(pq.dequeue()).toBe('hisham');
    expect(pq.dequeue()).toBe('abdullah');
    expect(pq.stack1.peek()).toBe('ali');
  });

  it('can successfully empty a PseudoQueue with successive calls of dequeue', () => {
    const pq = new PseudoQueue();
    pq.enqueue('hisham');
    pq.enqueue('abdullah');
    expect(pq.dequeue()).toBe('hisham');
    expect(pq.dequeue()).toBe('abdullah');
    expect(pq.stack1.isEmpty()).toBe(true);
  });

  it('will throw an exception when using dequeue on an empty PseudoQueue', () => {
    const pq = new PseudoQueue();
    expect(() => pq.dequeue()).toThrow(RangeError);
  });
});
