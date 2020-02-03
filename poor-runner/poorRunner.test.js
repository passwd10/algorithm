const solution = (participant, completion) => {
  participant.sort();
  completion.sort();

  for(let i in participant) {
      if(participant[i] !== completion[i]) return participant[i];
  }
}

test('solution', () => {
  expect(solution(['a', 'b', 'c'], ['c', 'b'])).toBe('a')
  expect(solution(['a', 'b', 'c', 'd', 'g'], ['b', 'g', 'a', 'c'])).toBe('d')
  expect(solution(['a', 'b', 'a', 'c'], ['b', 'c', 'a'])).toBe('a')
})