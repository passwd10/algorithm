const solution = (n, t, m, p) => {
  let gameArr = [];
  let number = 0;

  while (gameArr.length < t * m) {
    gameArr.push(...number.toString(n).split(''))
    number += 1;
  }

  return gameArr.filter((_, i) => i < t * m).map(v => v.toUpperCase()).filter((_, i) => i % m === (p - 1)).join('');
}

test('solution', () => {
  expect(solution(2, 4, 2, 1)).toBe("0111");
  expect(solution(16, 16, 2, 1)).toBe("02468ACE11111111");
  expect(solution(16, 16, 2, 2)).toBe("13579BDF01234567");
})
