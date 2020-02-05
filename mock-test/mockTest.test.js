const solution = (answers) => {
  const supoFirst = [1, 2, 3, 4, 5];
  const supoSecond = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoThird = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  let cntArr = [0, 0, 0];

  answers.forEach((v, i) => {
    (supoFirst[i % 5] === answers[i]) && (cntArr[0] += 1);
    (supoSecond[i % 8] === answers[i]) && (cntArr[1] += 1);
    (supoThird[i % 10] === answers[i]) && (cntArr[2] += 1);
  })

  const max = getMax(cntArr);
  const resultArr = [];

  cntArr.forEach((v, i) => {
    (v === max) && resultArr.push(i+1)
  })

  return resultArr
}

const getMax = (arr) => Math.max(...arr)

test('solution', () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual([1]);
})

test('getMax', () => {
  expect(getMax([5,0,0])).toBe(5);
})