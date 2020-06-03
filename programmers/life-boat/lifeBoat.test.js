const solution = (people, limit) => {
  let answer = 0;
  let second = people.length - 1;

  people.sort((a, b) => a - b);
  
  for (let first = 0; first <= second; first++) {
    if(people[first] + people[second--] > limit) {
      first -= 1;
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
