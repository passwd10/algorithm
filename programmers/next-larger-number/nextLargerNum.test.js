const solution = (n) => {
  let oneCount = countNum1(n.toString(2));
  
  while (n += 1) {
    if (oneCount === countNum1(n.toString(2))) return n;
  }
}

const countNum1 = (str) => str.match(/1/g).length;

test('solution', () => {
  expect(solution(78)).toBe(83);
})
test('countNum1', () => {
  expect(countNum1('1001110')).toBe(4);
})