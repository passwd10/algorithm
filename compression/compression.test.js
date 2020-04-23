const solution = (msg) => {
  const dic = Array(26).fill().map((v, i) => String.fromCharCode(65 + i));
  const result = [];

  while (msg.length > 0) {
    for (let i = msg.length; i > 0; i--) {
      let index = dic.indexOf(msg.slice(0, i));
      if (index > -1) {
        result.push(index + 1);
        dic.push(msg.slice(0, i + 1));
        msg = msg.slice(i);
        break;
      }
    }
  }
  return result;
}

test('solution', () => {
  expect(solution('KAKAO')).toEqual([11, 1, 27, 15]);
  expect(solution('TOBEORNOTTOBEORTOBEORNOT')).toEqual([20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]);
  expect(solution('ABABABABABABABAB')).toEqual([1, 2, 27, 29, 28, 31, 30]);
})
