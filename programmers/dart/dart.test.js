const solution = (dartResult) => {
  const dartResultArr = dartResult.split('');
  let accArr = [];
  let accIndex = -1;

  dartResultArr.forEach((v, i) => {
    let multiply = 0;

    if (v === '1' && dartResultArr[i + 1] === '0') {
      dartResultArr.splice(i, 1, '10');
      dartResultArr.splice(i + 1, 1)
    }

    if (v === 'S' || v === 'D' || v === 'T') {
      if (v === 'S') {
        multiply = 1;
      }
      if (v === 'D') {
        multiply = 2;
      }
      if (v === 'T') {
        multiply = 3;
      }
      accArr.push(Math.pow(dartResultArr[i - 1], multiply));
      accIndex += 1;
    }

    if (v === '*') {
      if (accIndex === 0) {
        accArr[0] *= 2;
      } else {
        accArr[accIndex - 1] *= 2;
        accArr[accIndex] *= 2;
      }
    }

    if (v === '#') {
      accArr[accIndex] *= -1;
    }
  })

  return accArr.reduce((acc, v) => acc += v);
}

test('solution', () => {
  expect(solution("1S2D*3T")).toBe(37);
  expect(solution("1D2S#10S")).toBe(9);
  expect(solution("1D2S0T")).toBe(3);
})