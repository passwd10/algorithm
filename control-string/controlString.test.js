const solution1 = str =>
  checkLength(str) ?
    str.trim().split('')
      .filter(v => v * 1 >= 0).length === str.length : false;

const checkLength = str => str.length === 4 || str.length === 6;

const solution2 = str => {
  var regEx = /^\d{6}$|^\d{4}$/;
  return regEx.test(str);
}

test('solution', () => {
  expect(solution('0000')).toBe(true);
  expect(solution('0')).toBe(false);
  expect(solution('000 ')).toBe(false);
})

test('checkLength', () => {
  expect(checkLength('1111')).toBe(true);
})