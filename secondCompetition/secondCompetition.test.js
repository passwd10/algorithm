

const caesarEncrypt = (s, n) => 
    s.split('').map(v => 
        v === ' ' ? v :
        isCapital(v) ? letter(65)[(v.charCodeAt(0) - 65 + n) % 26]
        : letter(97)[(v.charCodeAt(0) + n - 97) % 26]
    ).join('');


const letter = (asciNum) => [...Array(26).fill().map((_,i) => asciNum + i)]
    .map(v => String.fromCharCode(v));

const isCapital = (char) => char === char.toUpperCase();

// console.log(letter(65));
// console.log(letter(97));

test('caesarEncrypt', () => {
  expect(caesarEncrypt('A', 1)).toBe('B');
  expect(caesarEncrypt('AB', 1)).toBe('BC');
  expect(caesarEncrypt('z', 1)).toBe('a');
  expect(caesarEncrypt('a B z', 4)).toBe('e F d');
});

test('isCapital', () => {
    expect(isCapital('A')).toBe(true);
    expect(isCapital('a')).toBe(false);
})