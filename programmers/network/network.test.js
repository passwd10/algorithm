const solution = (n, computers) => {
  const check = [];
  let answer = 0;

  const search = (num) => {
    check[num] = true;
    computers[num].forEach((v, i) => {
      if (!check[i] && v === 1) {
        search(i);
      }
    })
  }

  computers.forEach((_, i) => {
    if (!check[i]) {
      search(i);
      answer += 1;
    }
  })

  return answer;
}

test('solution', () => {
  expect(solution(3, [[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toBe(3);
  expect(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2);
  expect(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])).toBe(1);
  expect(solution(4, [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]])).toBe(2);
  expect(solution(4, [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]])).toBe(1);
})