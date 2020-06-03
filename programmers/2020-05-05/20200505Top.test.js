const solution = (heights) => {
  heights = heights.reverse();
 
  for (let i = 0; i < heights.length; i++) {
    let idx = heights.slice(i + 1).findIndex(v => heights[i] < v);
    heights[i] = idx === -1 ? 0 : heights.length - (idx + i + 1);
  }
 
  return heights.reverse();
}

test('solution', () => {
  expect(solution([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4]);
  expect(solution([3,9,9,3,5,7,2])).toEqual([0,0,0,3,3,3,6]);
  expect(solution([1,5,3,6,7,6,5])).toEqual([0,0,2,0,0,5,6])
})