const solution = (number, k) => {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    let cur = number[i];

    while (k && stack[stack.length - 1] < cur) {
      stack.pop();
      k -= 1;
    }

    stack.push(cur);
  }
 
  return stack.slice(0, stack.length - k) .join('');
}

test('solution', () => {
  expect(solution("1924", 2)).toBe("94");
  expect(solution("1231234", 3)).toBe("3234");
  expect(solution("4177252841", 4)).toBe("775841");
  expect(solution("0000", 2)).toBe("00");
})