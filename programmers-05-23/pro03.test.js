/*
total_sp : 선행 스킬을 익히는데 필요한 스킬포인트의 합
  - 직접 연결된 선행 스킬의 포인트만 합한다
  - 선행 스킬이 없는 스킬들을 익히는데 필요한 스킬포인트는 모두 같다
skills : 상위 스킬을 담고있는 배열

스킬을 익히는데 필요한 스킬포인트의 배열을 출력하라

1. depth가 몇인지 확인한다.
2. 가장 처음 배우는 스킬의 개수(n)가 몇개인지 확인한다 (4개)
3. 해당 스킬들을 각각 1로 잡는다.
4. 위로 올라가서 비율을 나눈다

*/

const solution = (total_sp, skills) => {

  //탐색하여 가장 처음 배우는 스킬을 확인한다
  const eachSkills = [];
  skills = skills.map(skill => skill = {'next': skill[0], 'this': skill[1], 'point': 0})
  console.log(skills)

  skills.forEach(skill => {
    let idx = skills.findIndex(v => v.next === skill.this);
    if (idx === -1) {
      skill.point = 1;
    }
  })

  for (let i = 0; i < skills.length; i++) {
    let idx = skills.findIndex(v => v.this === skills[i].next);
    if (idx !== -1 && skills[i] !== -1) {
      skills[idx].point += skills[i].point;
      eachSkills.push({ 'skill': skills[i].this, 'point': skills[i].point })
      skills[i] = -1;
    }
  }

  for (let i = 0; i < skills.length; i++) {
    let idx = skills.findIndex(v => v.this === skills[i].next);
    if (idx !== -1 && skills[i] !== -1) {
      skills[idx].point += skills[i].point;
      eachSkills.push({ 'skill': skills[i].this, 'point': skills[i].point })
      skills[i] = -1;
    }
  }

  
  console.log(skills)
  console.log(eachSkills)
}

test('solution', () => {
  expect(solution(121, [[1, 2], [1, 3], [3, 6], [3, 4], [3, 5]])).toEqual([44, 11, 33, 11, 11, 11]);
});