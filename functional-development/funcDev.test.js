const solution = (progresses, speeds) => {
  let result = [];

  while (progresses.length > 0) {
    let count = 0;

    for (let i in progresses) {
      progresses[i] += speeds[i];
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    }

    if (count > 0) {
      result.push(count);
    }
  }

  return result;
}

const solution2 = (progresses, speeds) => {
  let days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
  let maxDays = days[0];
  let answer = [];
  let cnt = 0;

  for (let i = 0; i < days.length + 1; i++) {
    if (days[i] <= maxDays) {
      cnt += 1;
    } else {
      answer.push(cnt);
      cnt = 1;
      maxDays = days[i];
    }
  }
  return answer;
}

test('solution', () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1])
})