const solution = (s) => {
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? cnt += 1 : cnt -= 1;
    if (cnt < 0) return false;
  }

  return cnt === 0 ? true : false;
}

test('solution', () => {
  expect(solution('()))((()')).toBe(false)
  expect(solution('()()')).toBe(true)
  expect(solution('(()')).toBe(false)
})