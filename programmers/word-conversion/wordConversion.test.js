// 1. 변경해야하는 문자의 인덱스를 체크
// 2. target과 word와 변경해야하는 인덱스 체크하여 변경해야하는 문자가 있는지 확인
// 3. 변경해야하는 문자가 있으면 변경하고 Cnt + 1
const solution = (begin, target, words) => {
  let resultWord = [...begin];
  const checkNeedToChange = new Map();

  for (const index in begin) {
    if (begin[index] !== target[index]) {
      checkNeedToChange.set(index, false)
      continue;
    }
    checkNeedToChange.set(index, true);
  }

  console.log(checkNeedToChange)
  let answer = 0;

  words.forEach(word => {
    for (const index in word) {
      if (!checkNeedToChange.get(index) && word[index] === target[index]) {
        resultWord[index] = word[index];
        checkNeedToChange.set(index, true);
        answer += 1;
      }
    }
  })
  return resultWord.join('') === target ? answer : 0;
}

test('solution', () => {
  expect(solution("hit", "cog", ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])).toBe(4);
  expect(solution("hit", "cog", ['hot', 'dot', 'dog', 'lot', 'log'])).toBe(0);
  expect(solution("hit", "hhh", ['hhh', 'hht'])).toBe(2);
})
