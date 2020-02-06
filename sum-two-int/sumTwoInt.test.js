const getSumBetweenTwoInt2 = (a, b) =>
  a - b === 0 ? a : 
    new Array(Math.abs(a - b) + 1)
      .fill(Math.min(a, b))
      .reduce((acc, v, i) => acc + v + i)

const getSumBetweenTwoInt = (a, b) => (a + b) * (Math.abs(b - a) + 1) / 2;

test('getSumBetweenTwoInt', () => {
  expect(getSumBetweenTwoInt(3, 3)).toBe(3)
  expect(getSumBetweenTwoInt(3, 5)).toBe(12)
  expect(getSumBetweenTwoInt(-2, 5)).toBe(12)
})
