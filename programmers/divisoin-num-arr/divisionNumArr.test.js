const solution = (arr, division) => {
  arr = arr.filter(v => v % division === 0).sort((a, b) => a - b);
  return arr[0] === undefined ? [-1] : arr;
}

test('solution', () => {
  expect(solution([5, 9, 7, 10], 5)).toEqual([5, 10]);
  expect(solution([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36]);
  expect(solution([3, 2, 6], 10)).toEqual([-1]);
})