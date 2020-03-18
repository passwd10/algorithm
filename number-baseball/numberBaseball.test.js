const solution = (baseball) => {

  const numArr = new Array(987).fill(0)
    .map((v, i) => String(v += i))
    .filter((v, i) => {
      if (i >= 123 && i <= 987 &&
        v.indexOf(0) === -1 &&
        v.charAt(0) !== v.charAt(1) &&
        v.charAt(1) !== v.charAt(2) &&
        v.charAt(2) !== v.charAt(0)) {
        return v;
      }
    })

  const expectArr = []

  for (let i = 0; i < baseball.length; i++) {
    const baseballNum = String(baseball[i][0]);
    const strike = baseball[i][1];
    const ball = baseball[i][2];

    numArr.forEach(possibleNum => {
      let curStrike = 0;
      let curBall = 0;

      if (baseballNum.charAt(0) === possibleNum.charAt(0)) curStrike += 1;
      if (baseballNum.charAt(1) === possibleNum.charAt(1)) curStrike += 1;
      if (baseballNum.charAt(2) === possibleNum.charAt(2)) curStrike += 1;

      if (baseballNum.charAt(0) === possibleNum.charAt(1) ||
        baseballNum.charAt(0) === possibleNum.charAt(2)) {
        curBall += 1;
      }
      if (baseballNum.charAt(1) === possibleNum.charAt(0) ||
        baseballNum.charAt(1) === possibleNum.charAt(2)) {
        curBall += 1;
      }
      if (baseballNum.charAt(2) === possibleNum.charAt(0) ||
        baseballNum.charAt(2) === possibleNum.charAt(1)) {
        curBall += 1;
      }

      if (curStrike === strike && curBall === ball) {
        expectArr.push(possibleNum)
      }
    })
  }

  expectArr.sort((a, b) => a - b);

  let cnt = 0;
  let answer = 0;

  expectArr.forEach((_, i) => {
    expectArr[i - 1] === expectArr[i] ? cnt += 1 : cnt = 0;

    if (cnt === baseball.length - 1) {
      answer += 1;
    }
  })

  return answer;
}

test('solution', () => {
  expect(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])).toBe(2)
})