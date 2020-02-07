const solution = (A, B) => {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, v, i) => acc + v * B[i], 0);
}

test('solution', () => {
  expect(solution([1, 4, 2], [5, 4, 4])).toBe(29)
})