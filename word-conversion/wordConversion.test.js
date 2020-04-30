const solution = (begin, target, words) => {
  const result = [];

  const search = (begin, target, words, cnt) => {
    if (words.length === 0 && begin !== target) {
      return 0;
    } else if (begin === target) {
      return result.push(cnt);
    } else {
      for (let i = 0; i < words.length; i++) {
        if (isOverlap(begin, words[i])) {
          search(words[i], target, words.slice(i + 1, words.length), cnt + 1)
        }
      }
    }
  }

  search(begin, target, words, 0);

  return result.length === 0 ? 0 : Math.min(...result);
}

const isOverlap = (a, b) => {
  let cnt = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      cnt += 1;
    }
  }

  return cnt === 1 ? true : false;
}

test('solution', () => {
  expect(solution("hit", "cog", ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])).toBe(4);
  expect(solution("hit", "cog", ['hot', 'dot', 'dog', 'lot', 'log'])).toBe(0);
  expect(solution("hit", "hhh", ['hhh', 'hht'])).toBe(2);
})

test('겹치는지 확인', () => {
  expect(isOverlap("hit", "hot")).toBe(true);
  expect(isOverlap("hit", "dot")).toBe(false);
})