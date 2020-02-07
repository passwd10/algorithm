
const solution = (array, commands) =>
  commands.map(v => array.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1])


test('solution', () => {
  expect(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
})