const getLargestNum = (numbers) =>
  numbers.sort(compare)[0] === 0 ? '0' : numbers.join('');

const compare = (num1, num2) =>
  +(num1 + '' + num2) > +(num2 + '' + num1) ? -1 : 1;



test('getLargestNum', () => {
  expect(getLargestNum([0, 0, 0])).toBe("0");
  expect(getLargestNum([6, 10, 2])).toBe("6210");
  expect(getLargestNum([3, 30, 34, 5, 9])).toBe("9534330");
});

test('compare', () => {
  expect(compare(3, 30)).toBe(-1);
  expect(compare(34, 33)).toBe(-1);
  expect(compare(32, 33)).toBe(1);
  expect(compare(1000, 0)).toBe(-1);
})