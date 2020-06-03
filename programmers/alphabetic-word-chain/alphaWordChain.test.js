const solution = (n, words) => {
  for (let i = 0; i < words.length; i++) {
    if (words.slice(0, i).indexOf(words[i]) !== -1 || (i > 0 && words[i - 1].slice(-1) !== words[i].slice(0, 1))) {
      return [i % n + 1, Math.floor(i / n) + 1];
    }
  }
  return [0, 0];
}

test('solution', () => {
  expect(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'])).toEqual([3, 3]);
  expect(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])).toEqual([1, 3]);
  expect(solution(3, ['tank', 'kick', 'kick', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'])).toEqual([3, 1]);
  expect(solution(5,	['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure', 'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive'])).toEqual([0, 0])
})
