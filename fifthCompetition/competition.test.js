/*
"CBD" ["BACDE", "CBADF", "AECB", "BDA"]	2

1. "BACDE"를 split으로 나눈다.
2. "C", "B", "D"를 findIndex로 돌린다
3. sort를 했을때 이전과 다르다면 스킬 x
*/

const solution = (skill, skill_trees) => {
  return skill_trees.map(v => checkSkill(skill.split(''), v.split('')))
    // .filter((arr, i) => i !== arr.length && arr[arr.findIndex(e => e === -1)] > 0)
    .map(e => removeMinus(e))
    .filter(skillArr => skillArr.join('') == skillArr.sort((a,b) => a - b).join('')).length;
}

const checkSkill = (skillArr, skillTreeArr) => {
  return skillArr.map(v => skillTreeArr.findIndex(skill => v === skill));
}

const removeMinus = arr => arr.filter(v => v !== -1);

test('solution', () => {
  expect(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
  expect(solution("ABD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(1);
  expect(solution("EBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
})

test('checkSkill', () => {
  expect(checkSkill(["C", "B", "D"], ["B", "A", "C", "D", "E"])).toEqual([2, 0, 3]);
  expect(checkSkill(["A", "B", "D"], ["A", "E", "C", "B"])).toEqual([0, 3, -1]);
})

test('removeMinus', () => {
  expect(removeMinus([0, 3, -1])).toEqual([0, 3]);
})