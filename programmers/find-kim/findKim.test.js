const solution = (seoul) => {
  return "김서방은 " + seoul.findIndex(v => v === 'Kim') + "에 있다";
}

const solution2 = (seoul) => {
  return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
}

test('solution', () => {
  expect(solution(["Jane", "Kim"])).toBe("김서방은 1에 있다")
})