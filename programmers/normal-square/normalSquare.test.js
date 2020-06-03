const solution = (w, h) => {
  let gcd;
  let min = Math.min(w, h);

  for (let i = min; i > 0; i--) {
    if (w % i === 0 && h % i === 0) {
      gcd = i;
      break;
    }
  }

  return w * h - (w + h - gcd);
}

test('solution', () => {
  expect(solution(8, 12)).toBe(80);
})