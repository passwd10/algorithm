const solution = (numbers) => {
  let numArr = numbers.split('').sort((a, b) => b - a);
  let decimalArr = [0, 0];
  let number = new Array(10).fill(0).map((_, i) => '' + i);

  for (let i = 2; i <= +numArr.join(''); i++) {
    decimalArr.push(i);
  }

  for (let i = 2; i < decimalArr.length; i++) {
    if (decimalArr[i] !== 0) {
      for (let j = i * 2; j < decimalArr.length; j += i) {
        decimalArr[j] = 0;
      }
    }
  }

  decimalArr = decimalArr.filter(v => v !== 0).map(v => '' + v);

  numArr.forEach(v =>
    number = number.map(v2 => v === v2 ? '-1' : v2))

  number.filter(v => v !== '-1').forEach(v =>
    decimalArr = decimalArr.map(v2 => v2.includes(v) ? '-1' : v2)
  )

  decimalArr = decimalArr.filter(v => v !== '-1')

  for (let i = 0; i < decimalArr.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
      if (countAvailNum('' + decimalArr[i], '' + numArr[j]) > countAvailNum('' + numbers, '' + numArr[j])) {
        decimalArr[i] = 'null';
      }
    }
  }

  return decimalArr.filter(v => v !== 'null').length;
}

const countAvailNum = (str, char) => {
  const re = new RegExp(char, 'g');
  const result = str.match(re || []);
  return result === null ? 0 : result.length;
}

test('solution', () => {
  expect(solution("17")).toBe(3);
  expect(solution("011")).toBe(2);
})

test('countAvailNum', () => {
  expect(countAvailNum("02111", "2")).toBe(1);
  expect(countAvailNum("02111", "1")).toBe(3);
  expect(countAvailNum("02111", "4")).toBe(0);
})