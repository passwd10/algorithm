const solution = (people, limit) => {
  let answer = 0;
  let index = people.length - 1;

  people.sort((a, b) => a - b);
  
  for (let i = 0; i <= index; i++) {
    
    while (index > i && people[i] + people[index--] > limit) {
      answer += 1;
    }
    answer += 1;
  }

  return answer;
}

test('solutoin', () => {
  expect(solution([70, 50, 80, 50], 100)).toBe(3);
  expect(solution([70, 80, 50], 100)).toBe(3);
  expect(solution([10, 20, 30, 40, 50, 60, 70, 80, 90], 100)).toBe(5);
})
