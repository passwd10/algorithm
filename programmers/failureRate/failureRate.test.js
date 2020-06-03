const solution = (N, stages) => {
  const result = [];

  for (let i = 1; i < N + 1; i++) {
    result.push(stages.filter(v => v === i).length / stages.filter(v => v >= i).length);
  }

  return result
    .map((v, i) => v = { rate: v, index: i + 1 })
    .sort((a, b) => {
      if (b.rate > a.rate) {
        return 1;
      }
      else if (a.rate > b.rate) {
        return -1;
      }
      else {
        return a.index > b.index ? 1 : -1
      }
    })
    .map(v => v.index)
}

test('solution', () => {
  expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
})