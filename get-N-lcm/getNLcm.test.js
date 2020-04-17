const solution = (arr) => {
  return arr.reduce((v, acc) =>  v * acc / getGcd(v, acc))
}

const getGcd = (num1, num2) => {
  return num1 % num2 === 0 ? num2 : getGcd(num2, num1 % num2);
}

test('solution', () => {
  expect(solution([2, 6, 8, 14])).toBe(168);
  expect(solution([1, 2, 3])).toBe(6);
})

test('getGcd', () => {
  expect(getGcd(3, 6)).toBe(3);
  expect(getGcd(9, 7)).toBe(1);
  expect(getGcd(16, 18)).toBe(2);
})