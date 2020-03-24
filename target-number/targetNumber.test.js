const solution = (numbers, target) => {
  let answer = 0;

  const recur = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    recur(index + 1, sum + numbers[index]);
    recur(index + 1, sum - numbers[index]);
  }

  recur(0, 0);

  return answer;
}


test('solution', () => {
  expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
  expect(solution([1, 2, 3], 0)).toBe(2);
})