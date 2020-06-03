const getStrangeText = (str) =>
  str.split(' ')
    .map(v => v.split('')
      .map((e, i) => i % 2 === 0 ?
        e.toUpperCase()
          : e.toLowerCase()).join('')).join(' ')

test('getStrangeText', () => {
  expect(getStrangeText('try hello world')).toBe('TrY HeLlO WoRlD');
  expect(getStrangeText('ABC')).toBe('AbC');
  expect(getStrangeText('AB C')).toBe('Ab C');
})