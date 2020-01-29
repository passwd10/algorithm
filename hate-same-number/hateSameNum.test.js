const solution = arr => {
  let resultArr = [arr[0]];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      resultArr = [...resultArr, arr[i + 1]]
    }
  }
  return resultArr
}


test('solution', () => {
  expect(solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
  expect(solution([4, 4, 4, 3, 3])).toEqual([4, 3]);
})
