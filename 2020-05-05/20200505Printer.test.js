const solution = (priorities, location) => {
  priorities = priorities.map((v, i) => v = { pri: v, loc: i })

  let cnt = 0;
  while (true) {
    const head = priorities.shift();
    if (priorities.findIndex(v => v.pri > head.pri) > -1) {
      priorities.push(head);
    } else {
      cnt += 1;
      if (head.loc === location) return cnt;
    }
  }
}

test('solution', () => {
  expect(solution([2, 1, 3, 2], 2)).toBe(1);
  expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
})