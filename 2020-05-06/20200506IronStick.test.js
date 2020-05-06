const solution = (arrangement) => {
  const stickArr = [];
  let answer = 0;

  for (let i = 0; i < arrangement.length; i++) {
    if (arrangement[i] === '(') {
      stickArr.push('(');
    } else {
      stickArr.pop();
      answer += arrangement[i - 1] === ')' ? 1 : stickArr.length;
    }
  }

  return answer;
}

test('solution', () => {
  expect(solution("()(((()())(())()))(())")).toBe(17);
  expect(solution("(()())")).toBe(3);
  expect(solution("(())")).toBe(2);
  expect(solution("()")).toBe(0);
  expect(solution("(((()())))")).toBe(9);
  expect(solution("(((()())(())()))")).toBe(15);
})