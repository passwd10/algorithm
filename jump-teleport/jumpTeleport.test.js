const solution = (n) => {
  return n === 1 ? 1 : n % 2 === 1 ? solution(n - 1) + 1 : solution(n / 2);
}

test('solution', () => {
  expect(solution(1)).toBe(1);
  expect(solution(2)).toBe(1);
  expect(solution(3)).toBe(2);
  expect(solution(4)).toBe(1);
  expect(solution(5000)).toBe(5);
})