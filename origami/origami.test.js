const solution = (n) => {
  let result = [0];

  for (let i = 1; i < n; i++) {
    result = [...result, 0, ...result.reverse().map(v => v === 1 ? 0 : 1)];
  }

  return result;
}

test('solution', () => {
  expect(solution(1)).toEqual([0]);
  expect(solution(2)).toEqual([0,0,1]);
  expect(solution(3)).toEqual([0,0,1,0,0,1,1]);
  expect(solution(4)).toEqual([0,0,1,0,0,1,1,0,0,0,1,1,0,1,1]);
})