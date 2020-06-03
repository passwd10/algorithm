/* 
12 = (55 + 5) / 5
11 = 22 / 2
12 = 22 / 2 + (2 / 2)
13 = 22 / 2 + 2
14 = 2 * 2 * 2 * 2 - 2

## 2. 계획

1. 모든 사칙연산의 경우를 나열하여 number에 8번 안에 수렴하는 경우의 수를 구하라
*/

const solution = (N, number) => {

  for (let i = 0; i < 5; i++) {
    // return compute(N, number, 0, 0, i)
    console.log(compute(N, number, 0, 1, i))
  }
}

const compute = (N, number, result, cnt, opt) => {
  if (cnt > 8 || result === number) {
    return -1
  } else {
    for (let i = 0; i < 5; i++) {
      opt === 0 ? compute(N, number, result + N, cnt += 1, i) :
        opt === 1 ? compute(N, number, result - N, cnt += 1, i) :
          opt === 2 ? compute(N, number, result / N, cnt += 1, i) :
            opt === 3 ? compute(N, number, result % N, cnt += 1, i) :
              compute(N, number, result + '' + N, cnt += 1, i)
    }
  }
}

test('solution', () => {
  // expect(solution(5, 12)).toBe(4);
  expect(solution(2, 11)).toBe(3);
  // expect(solution(2, 10)).toBe(5);
})
