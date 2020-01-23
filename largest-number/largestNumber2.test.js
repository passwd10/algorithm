const getLargestNum = (numbers) =>
  +numbers.map(String).sort((a, b) => (b + a) - (a + b)).join('') + '';

test('getLargestNum', () => {
  expect(getLargestNum([6, 10, 2])).toBe("6210");
  expect(getLargestNum([3, 30, 34, 5, 9])).toBe("9534330");
  expect(getLargestNum([0, 0, 0])).toBe("0");
})
