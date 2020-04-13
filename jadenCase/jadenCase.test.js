const solution1 = (s) => {
  return s.split(' ').map(str => {
    return str.split('').map((char, i) => {
      if (i === 0 && char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
        return String.fromCharCode(char.charCodeAt() - 32);
      }
      if (i > 0 && char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
        return String.fromCharCode(char.charCodeAt() + 32);
      }
      return char;
    }).join('');
  }).join(' ');
}

const solution2 = (s) => {
  return s.split(' ').map(str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()).join(' ');
}


test('solution', () => {
  expect(solution("3people unFollowed me")).toBe("3people Unfollowed Me");
  expect(solution("for the last week")).toBe("For The Last Week");
})