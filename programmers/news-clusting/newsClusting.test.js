const solution = (str1, str2) => {
  let arr1 = removeSpecialChar(getTwoPair(str1.toLowerCase()));
  let arr2 = removeSpecialChar(getTwoPair(str2.toLowerCase()));
  let interLength = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr2[j] = '-1';
        interLength += 1;
        break;
      }
    }
  }

  let unionLength = arr1.length + arr2.length - interLength;
 
  return unionLength === 0 ? 65536 : Math.floor((interLength / unionLength) * 65536);
}

const getTwoPair = (str) => {
  const result = [];

  for (let i = 1; i < str.length; i++) {
    result.push(str[i - 1] + str[i]);
  }
  return result;
}

const removeSpecialChar = (arr) => {
  return arr.filter(v => v[0].charCodeAt() > 96 && v[0].charCodeAt() < 123 && v[1].charCodeAt() > 96 && v[1].charCodeAt() < 123);
}

test('solution', () => {
  expect(solution('FRANCE', 'french')).toBe(16384);
  expect(solution('handshake', 'shake hands')).toBe(65536);
  expect(solution('aa1+aa2','AAAA12')).toBe(43690);
  expect(solution('E=M*C^2', 'e=m*c^2')).toBe(65536);
})

test('getTwoPair', () => {
  expect(getTwoPair('french')).toEqual(['fr', 're', 'en', 'nc', 'ch']);
})

test('removeSpecialChar', () => {
  expect(removeSpecialChar(['ab', 'b+'])).toEqual(['ab']);
  expect(removeSpecialChar(['f ', ' a', 'a+', '+c', 'ce'])).toEqual(['ce']);
})