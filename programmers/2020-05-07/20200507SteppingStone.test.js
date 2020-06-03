const solution = (stones, k) => {
  let min = 200000000;
  let idx;

  for (let i = 0; i < stones.length - k + 1; i++) {
    let max = 0;
    for (let j = i; j < k + i; j++) {
      if (max < stones[j]) {
        max = stones[j];
        idx = j;
      }
    }
    if (max < min) {
      min = max;
    }
    i = idx;
  }

  return min;
}

test('solution', () => {
  expect(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)).toBe(3);
})