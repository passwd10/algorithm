const countPossibleSkills = (skill, skill_trees) => {
  const regExp = new RegExp(skill.split('').join('|'), 'g');

  return skill_trees.map(skill_tree => skill_tree.match(regExp).join(''))
           .filter(skill_tree => skill.startsWith(skill_tree)).length
}

test('countPossibleSkills', () => {
  expect(countPossibleSkills('CBD', ['BCD', 'CBD', 'CB', 'BD'])).toBe(2);
  expect(countPossibleSkills('AB', ['BC', 'CAB', 'A', 'AB'])).toBe(3);
})