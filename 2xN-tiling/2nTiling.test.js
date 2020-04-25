const solution = (n) => {
  const result = [1, 2];

  for (let i = 2; i < n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1000000007;
  }
  
  return result[n - 1];
}

test('solution', () => {
  expect(solution(4)).toBe(5);
  expect(solution(5)).toBe(8);
  expect(solution(6)).toBe(13);
})