const solution = (jobs) => {
  jobs.sort((a, b) => a[0] - b[0] > 0 ? 1 : a[0] - b[0] < 0 ? -1 :
    a[1] - b[1] > 0 ? 1 : a[1] - b[1] < 0 ? -1 : 0
  );
  const jobsLen = jobs.length;
  const queue = [];
  let time = 0;
  let sum = 0;

  while (jobs.length > 0) {
    let min = 1000;
    let idx = 0;

    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i][0] <= time && jobs[i][1] < min) {
        min = jobs[i][1];
        idx = i;
      }
    }

    queue.push(...jobs.splice(idx, 1));
    time = queue[0][0] > time ? queue[0][0] + queue[0][1] : time += queue[0][1];
    sum += time - queue[0][0];  
    queue.pop();
  }
  return Math.floor(sum / jobsLen);
}

test('solution', () => {
  expect(solution([[0, 3], [1, 9], [2, 6]])).toBe(9);
  expect(solution([[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]])).toBe(13);
  expect(solution([[0, 9], [13, 1]])).toBe(5);
  expect(solution([[0, 9], [5, 10]])).toBe(11);
  expect(solution([[1, 9], [1, 4], [1, 5], [1, 7], [1, 3]])).toBe(13);
})