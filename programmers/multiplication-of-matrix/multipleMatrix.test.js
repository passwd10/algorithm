const solution = (arr1, arr2) => {
  let result = Array(arr1.length).fill().map(_ => Array(arr2[0].length).fill(0));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      for (let r = 0; r < arr2[0].length; r++) {
        result[i][r] += arr1[i][j] * arr2[j][r];
      }
    }
  }
  return result;
}

test('solution', () => {
  expect(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])).toEqual([[15, 15], [15, 15], [15, 15]]);
  expect(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],[[5, 4, 3], [2, 4, 1], [3, 1, 1]])).toEqual([[22, 22, 11], [36, 28, 18], [29, 20, 14]]);
})
