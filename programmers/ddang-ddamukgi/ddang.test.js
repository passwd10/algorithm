const solution = (land) => {
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      let temp = land[i][j];
      if (i + 1 < land.length) {
        land[i][j] = -1;
        land[i + 1][j] += Math.max(...land[i]);
        land[i][j] = temp;
      }
    }
  }

  return Math.max(...land[land.length - 1]);
}

test('solution', () => {
  expect(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]])).toBe(16);
  expect(solution([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]])).toBe(11);
  expect(solution([[1, 2, 3, 5], [5, 6, 7, 100], [4, 3, 2, 1]])).toBe(107);
  expect(solution([[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 5], [8, 7, 6, 5]])).toBe(20);
})
