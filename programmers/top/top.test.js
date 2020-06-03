
const solution = heights =>
  heights.map((height, index) => index === 0 ? 0 
  : getNearHighIndex(front(heights, index), height))

const front = (arr, index) => arr.slice(0, index);

const getNearHighIndex = (arr, value) =>
  arr.findIndex(e => e > value) === -1 ? 0 
  : arr.length - arr.reverse().findIndex(e => e > value);

test('solution', () => {
  expect(solution([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4])
  expect(solution([3, 9, 9, 3, 5, 7, 2])).toEqual([0, 0, 0, 3, 3, 3, 6])
})

test('front', () => {
  expect(front([6, 9, 5, 7, 4], 2)).toEqual([6, 9]);
})

test('getNearHighIndex', () => {
  expect(getNearHighIndex([6, 9, 5, 7], 4)).toBe(4);
  expect(getNearHighIndex([6, 9, 5], 7)).toBe(2);
  expect(getNearHighIndex([6, 9], 5)).toBe(2);
  expect(getNearHighIndex([6], 9)).toBe(0);
  expect(getNearHighIndex([3, 9], 9)).toBe(0);
})

