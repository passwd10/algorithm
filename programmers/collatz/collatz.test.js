
const solution = (num) => getCollatzCount(num, 0);

const getCollatzCount = (num, acc) => (num === 1)
    ? ((acc > 500) ? -1 : acc)
    : getCollatzCount(calculateNextNum(num), acc + 1)

const calculateNextNum = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);

test('solution', () => {
  expect(solution(6)).toBe(8);
  expect(solution(16)).toBe(4);
  expect(solution(626331)).toBe(-1);
})

test('calculateNextNum', () => {
  expect(calculateNextNum(6)).toBe(3);
  expect(calculateNextNum(5)).toBe(16);
})

test('getCollatzCount', () => {
  expect(getCollatzCount(6, 0)).toBe(8);
  expect(getCollatzCount(16, 0)).toBe(4);
  expect(getCollatzCount(626331, 0)).toBe(-1);
})
