const solution = (s) => {
  let answer = s.length;
  for (let i = 1; i <= s.length; i++) {
    answer = Math.min(answer, compress((divide(s, i))).length)
  }
  return answer;
}

const divide = (str, length) => {
  let result = [];
  let temp = [];

  for (let i = 0; i < str.length; i++) {
    temp.push(str[i])
    if (temp.length === length) {
      result.push(temp.join(''));
      temp = [];
    }
    if (i === str.length - 1 && temp.length !== 0) {
      result.push(temp.join(''));
    }
  }
  return result;
}

const compress = (strArr) => {
  let count = 1;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      count += 1;
      strArr[i] = -1;
    } else {
      if (count === 1) {
        continue;
      } else {
        strArr[i] = count + strArr[i];
        count = 1;
      }
    }
  }

  return strArr.filter(v => v !== -1).join('');
}

test('solution', () => {
  expect(solution("aabbaccc")).toBe(7);
  expect(solution("abcabcabcabcdededededede")).toBe(14);
})

test('divide', () => {
  expect(divide('123', 1)).toEqual(['1', '2', '3']);
  expect(divide('1234', 2)).toEqual(['12', '34']);
  expect(divide('1234', 3)).toEqual(['123', '4']);
})

test('compress', () => {
  expect(compress(['a', 'a', 'b', 'b', 'a', 'c', 'c', 'c'])).toBe('2a2ba3c');
  expect(compress(['abc', 'abc', 'abc', 'abc', 'ded', 'ede', 'ded', 'ede'])).toBe('4abcdededededede');
})