const solution = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] % 1234567 + arr[i - 2] % 1234567);
  }
  return arr[n] % 1234567;
}

test('solution', () => {
  expect(solution(3)).toBe(2);
  expect(solution(5)).toBe(5);
})