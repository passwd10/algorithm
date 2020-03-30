/*
"CBD" ["BACDE", "CBADF", "AECB", "BDA"]	2

1. "BACDE"를 split으로 나눈다.
2. "C", "B", "D"를 findIndex로 돌린다
3. sort를 했을때 이전과 다르다면 스킬 x

주의: 선행 스킬트리에 있는 스킬이 아닌 스킬로만 구성된 스킬트리가 있을 수 있음.

1. 먼저 skill_trees에 있는 각 문자열들을 선행스킬 문자만으로 구성된 문자열로 변환된 배열로 만든다.
2. 그 후 배열 안의 문자들 중 선행스킬 문자열의 부분집합인 문자열들만 걸러낸다.
3. 걸러낸 배열의 길이를 리턴한다.

*/
const checkPriority = (firstStr, secondStr) =>
  secondStr.split('')
    .map(v => firstStr.split('').findIndex(e => e === v));


const canLearnSkillCount = (skill, skill_trees) => {
  return skill_trees.length;
}

test('canLearnSkillCount', () => {
  expect(canLearnSkillCount("ABC", ["A", "B"])).toBe(2);
  expect(canLearnSkillCount("ABC", ["A", "B", "ACB"])).toBe(2);
  expect(canLearnSkillCount("CBD", ["EFG"])).toBe(1);
  // expect(canLearnSkillCount("CBD" ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
})

test.only('checkPriority', () => {
  expect(checkPriority("ABC", "ACB")).toEqual([0, 2, 1]);
  expect(checkPriority("ABC", "ADBC")).toEqual([0, -1, 1, 2]);
  expect(checkPriority("CBD", "EFG")).toEqual([-1, -1, -1]);
})

