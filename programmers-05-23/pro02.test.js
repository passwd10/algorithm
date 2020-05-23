const solution = (n) => {
  const sumArr = [1];

  const search = (cnt, exponent, exOrder) => {
    if(cnt - 1 === n) {
      return sumArr[sumArr.length - 1];
    } else {
      const thisExponent = getExponent(cnt);
      if(thisExponent > exponent) {
        sumArr.push(Math.pow(3, thisExponent));
        return search(cnt + 1, exponent + 1, 0);  
      } else {
        sumArr.push(Math.pow(3, thisExponent) + sumArr[exOrder]);
        return search(cnt + 1, exponent, exOrder + 1);  
      }
    }
  }

  return search(2, 0, 0);
}

const getExponent = (order) => {
  let exponent = 0;
  while (true) {
    if (Math.pow(2, exponent) > order) {
      break;
    }
    exponent += 1;
  }

  return exponent - 1;
}

test('solution', () => {
  // expect(solution(4)).toBe(9);
  expect(solution(11)).toBe(31);
});

test('getExponent', () => {
  expect(getExponent(1)).toBe(0);
  expect(getExponent(2)).toBe(1);
  expect(getExponent(4)).toBe(2);
  expect(getExponent(11)).toBe(3);
})