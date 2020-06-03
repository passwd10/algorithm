const solution = (n) => {
  let arr = new Array(n + 1).fill().map((_, i) => i);

  let answer = 0;

  for (let i = 2; i < n + 1; i++) {
    if (arr[i] !== 0) {
      answer += 1;
      for (let j = i * 2; j < n + 1; j += i) {
        arr[j] = 0;
      }
    }
  }

  return answer;
}

test('solution', () => {
  expect(solution(10)).toBe(4);
  expect(solution(5)).toBe(3);
})