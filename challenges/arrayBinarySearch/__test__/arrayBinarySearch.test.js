const binarySearch = require('../array-binary-search.js')

describe('Happy tests', () => {
  it('Should return correct index', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    expect(binarySearch(arr,4)).toBe(3)
  })
  it('Should return -1 with low value', () => {
    const arr=[1,2,3,4,5,6,7,8,9,10];
    expect(binarySearch(arr,0)).toBe(-1)
  })
  it('Should return -1 with  high value', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    expect(binarySearch(arr,11)).toBe(-1)
  })
})