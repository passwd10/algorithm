const solution = (n, arr1, arr2) => {
  const map1 = arr1.map(v => +v.toString(2));
  const map2 = arr2.map(v => +v.toString(2));
  const result = [];

  for (let i = 0; i < n; i++) {
    const map = fillWithZero(n, map1[i] + map2[i] + '')
                .split('')
                .map(v => (v > 0) ? '#' : ' ')
                .join('');

    result.push(map);
  }

  return result;
}

const fillWithZero = (n, str) => {
  return str.padStart(n, '0');
}

// const fillWithZero = (n, str) => {
//   return '0'.repeat(n - str.length) + str;
// }

test('solution', () => {
  expect(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(["#####", "# # #", "### #", "#  ##", "#####"]);
})

test('fillWithZero', () => {
  expect(fillWithZero(5, '1010')).toBe("01010");
})