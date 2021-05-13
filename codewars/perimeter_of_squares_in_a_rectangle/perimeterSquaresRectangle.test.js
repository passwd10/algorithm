/* 

목표 : 모든 정사각형들의 둘레의 합을 구하라

정사각형의 개수는 n + 1 개
*/

// 풀이 1
function perimeter(n) {
  let sum = 0;

  const fibonacci = (n) => {
    if (n === 0) return 1;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  for (let i = 0; i <= n; i++) {
    sum += fibonacci(i);
  }

  return 4 * sum;
}

// 풀이 2
function perimeter(n) {
  let sum = 0;
  let fibonaccis = new Array(n).fill(null);

  fibonaccis[0] = 1;
  fibonaccis[1] = 1;

  const fibonacci = (n) => {
    if (fibonaccis[n]) {
      return fibonaccis[n];
    }

    fibonaccis[n] = fibonaccis[n - 1] + fibonaccis[n - 2];
    return fibonaccis[n];
  }

  for (let i = 0; i <= n; i++) {
    sum += fibonacci(i);
  }

  return 4 * sum;
}


test('perimeter', () => {
  expect((perimeter(0))).toBe(4);
  expect((perimeter(1))).toBe(8);
  expect((perimeter(2))).toBe(16);
  expect((perimeter(3))).toBe(28);
  expect((perimeter(4))).toBe(48);
  expect((perimeter(5))).toBe(80);
  expect((perimeter(7))).toBe(216);
  expect((perimeter(0))).toBe(4);
})
