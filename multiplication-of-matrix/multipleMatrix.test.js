const solution = (arr1, arr2) => {
  let result = new Array(arr1.length).fill(null).map(_ => Array());

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result[i][0] = arr1[i][0] * arr2[0][0] + arr1[i][1] * arr2[1][0];
      result[i][1] = arr1[i][0] * arr2[0][1] + arr1[i][1] * arr2[1][1];
    }
  }
  return result;
}

// result[0][0] = arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][0];
// result[0][1] = arr1[0][0] * arr2[0][1] + arr1[0][1] * arr2[1][1];

// result[1][0] = arr1[1][0] * arr2[0][0] + arr1[1][1] * arr2[1][0];
// result[1][1] = arr1[1][0] * arr2[0][1] + arr1[1][1] * arr2[1][1];

// result[2][0] = arr1[2][0] * arr2[0][0] + arr1[2][1] * arr2[1][0];
// result[2][1] = arr1[2][0] * arr2[0][1] + arr1[2][1] * arr2[1][1];



test('solution', () => {
  expect(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])).toEqual([[15, 15], [15, 15], [15, 15]]);
  // expect(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],[[5, 4, 3], [2, 4, 1], [3, 1, 1]])).toEqual([[22, 22, 11], [36, 28, 18], [29, 20, 14]]);
})
