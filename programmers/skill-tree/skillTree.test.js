const countPossibleSkill = (skill, skill_trees) => 
  skill_trees
    .map(v => v.replace(new RegExp(`[^${skill}]`,'g'),''))
    .filter(s => skill.startsWith(s)).length;

test('countPossibleSkill', () => {
  expect(countPossibleSkill("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
})