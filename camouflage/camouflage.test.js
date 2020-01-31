const countCamouflage = (arr) =>
  countCombination(arr.map(v => v[1]).sort())
    .reduce((acc, v) => {
      return (acc + 1) * (v + 1) - 1
    });


const countCombination = (arr) => {
  let cnt = 1;
  const resultArr = [];

  arr.forEach((v, i) => {
    if (v !== arr[i + 1]) {
      resultArr.push(cnt);
      cnt = 1;
    } else {
      cnt += 1;
    }
  })

  return resultArr;
}

test('solution', () => {
  expect(countCamouflage([['a', 'headgear'], ['b', 'eyewear'], ['c', 'headgear']])).toBe(5);
  expect(countCamouflage([['a', 'headgear'], ['b', 'eyewear'], ['c', 'headgear'], ['d', 'face'], ['e', 'face']])).toBe(17);
  expect(countCamouflage([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']])).toBe(3);
})

test('countCombination', () => {
  expect(countCombination(['eyewear', 'headgear', 'headgear'])).toEqual([1, 2])
})
