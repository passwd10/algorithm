const getLenWidth = (brown, red) => {
  for(let i = 1; i < red + 1; i++) {
    if (brown + red === (red / i + 2) * (i + 2)) {
      return [red / i + 2, i + 2]
    }
  }
}

test('getLenWidth', () => {
  expect(getLenWidth(24, 24)).toEqual([8, 6]);
  expect(getLenWidth(10, 2)).toEqual([4,3]);
})