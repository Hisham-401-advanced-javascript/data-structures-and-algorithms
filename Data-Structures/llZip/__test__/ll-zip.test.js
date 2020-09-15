const LinkedList = require('../../linkedList/linked-list.js');
const zipLists = require('../ll-zip.js');

it('should zip together two lists of equal lengths', () => {
  const ll1 = new LinkedList();
  ll1.insert('hisham');
  ll1.append('abed');
  ll1.append('ahmad');
  const ll2 = new LinkedList();
  ll2.insert('waleed');
  ll2.append('khaled');
  ll2.append('mohammad');
  let combinedList = zipLists(ll1, ll2).toString();
  expect(combinedList).toBe(
    '{ hisham } -> { waleed } -> { abed } -> { khaled } -> { ahmad } -> { mohammad } -> NULL'
  );
});

it('should zip together two lists of different lengths', () => {
  const ll1 = new LinkedList();
  ll1.insert('hisham');
  ll1.append('abed');
  ll1.append('ahmad');
  ll1.append('abdullah');
  const ll2 = new LinkedList();
  ll2.insert('waleed');
  ll2.append('khaled');
  ll2.append('mohammad');
  let combinedList = zipLists(ll1, ll2).toString();
  expect(combinedList).toBe(
    '{ hisham } -> { waleed } -> { abed } -> { khaled } -> { ahmad } -> { mohammad } -> { abdullah } -> NULL'
  );
});
