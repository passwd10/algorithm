const getTransmitterTower = heights =>
  heights.reverse()
  .map((_,i) => getReceivedTowerHeihgt(heights, i))
  .reverse()
  .map(v => v === -1 ? 0 : heights.length - v)

const getReceivedTowerHeihgt = (arr, index) => 
  arr.findIndex((v,i) => v > arr[index] && i > index)

test('getTransmitterTower', () => {
  expect(getTransmitterTower([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4]);
  expect(getTransmitterTower([3, 9, 9, 3, 5, 7, 2])).toEqual([0, 0, 0, 3, 3, 3, 6]);
})

test('getReceivedTowerHeihgt', () => {
  expect(getReceivedTowerHeihgt([2, 7, 5, 3, 9, 9, 3], 0)).toBe(1);
  expect(getReceivedTowerHeihgt([1, 7, 5, 3, 9, 9, 3], 1)).toBe(4);
  expect(getReceivedTowerHeihgt([1, 4, 5, 3, 9, 9, 3], 2)).toBe(4);
  expect(getReceivedTowerHeihgt([1, 4, 4, 3, 9, 9, 3], 3)).toBe(4);
  expect(getReceivedTowerHeihgt([1, 4, 4, 4, 9, 9, 3], 4)).toBe(-1);
  expect(getReceivedTowerHeihgt([1, 4, 4, 4, -1, 9, 3], 5)).toBe(-1);
  expect(getReceivedTowerHeihgt([2, 7, 5, 3, 9, 9, 3], 6)).toBe(-1);
})
