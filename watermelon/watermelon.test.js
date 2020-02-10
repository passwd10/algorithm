const solution = (n) => Array(n).fill(0).map((_,i) => i % 2 !== 0 ? '박' : '수').join('');

const solution = (n) => {
  const str = '수박';
  return str.repeat(n - 1).substring(0, n);
}

test('solution', () => {
 expect(solution(3)).toBe("수박수");
 expect(solution(4)).toBe("수박수박");
})