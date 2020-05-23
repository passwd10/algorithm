const solution = (p) => {
  const pLength = (p + '').length;
  while (true) {
    p += 1;
    if (new Set((p + '').split('')).size >= pLength) {
      break;
    }
  }
  return p;
}

test('solution', () => {
  expect(solution(1987)).toBe(2013);
});