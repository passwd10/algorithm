/*
1. 문자열 안에 p나 P를 발견하면 cnt값을 +1을 한다.
2. 문자열 안에 y나 Y를 발견하면 cnt값을 -1을 한다.
3. 문자열을 다 돌았을 때 cnt값이 0 이면 true 그렇지않으면 false 반환
*/

const isSameCount = (s) => {
  let cnt = 0;

  s.split('').forEach(v => {
    if (v === 'p' || v === 'P') {
      return cnt += 1;
    }
    if (v === 'y' || v === 'Y') {
      return cnt -= 1;
    }
  })

  return cnt === 0;
}

test('isSameCount', () => {
  expect(isSameCount("pPoooyY")).toBe(true);
  expect(isSameCount("PyY")).toBe(false);
});