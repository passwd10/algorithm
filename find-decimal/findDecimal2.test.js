const solution = (numbers) => {
  const numArr = numbers.split('');
  let combineArr = [];
  //해당 수를 조합하여 만들 수 있는 모든 경우의 수
  // 1, 2, 3 

  // 1, 2, 3, 
  // 12, 13, 21, 23, 31, 32, 
  // 123, 132, 213, 231, 312, 321

  return 3;
}

test('solution', () => {
  expect(solution("17")).toBe(3);
  expect(solution("011")).toBe(2);
})