/*
- N행 4열로 이루어짐
- 행의 한칸만 밟아야 하고 바로위에서 밟은열을 또 밟을 수 없다
- 얻을 수 있는 점수 최대값

DFS사용
*/

const solution = (land) => {
  let answer = [];

  for (let a = 0; a < 4; a++) {
    let beforeIdx = a;
    let sum = land[0][a];
    let max = 0;

    for (let i = 1; i < land.length; i++) {
      let temp = land[i][beforeIdx];
      land[i][beforeIdx] = -1;
      max = Math.max(...land[i]);
      sum += max;
      land[i][beforeIdx] = temp;
      beforeIdx = land[i].findIndex(v => v === max);
    }

    answer.push(sum);
  }
  console.log(answer)
  return Math.max(...answer);
}


test('solution', () => {
  expect(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]])).toBe(16);
  expect(solution([[1,2,3,4],[1,2,3,4],[1,2,3,4]])).toBe(11);
  expect(solution([[1,2,3,5],[5,6,7,100],[4,3,2,1]])).toBe(107);

})
