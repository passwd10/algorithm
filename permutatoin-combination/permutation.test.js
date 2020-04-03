let permArr = [];
let usedChars = [];

const permutation = (input) => {
  for (let i = 0; i < input.length; i++) {
    let ch = input.splice(i, 1);
    usedChars.push(ch);
    // console.log(usedChars)
    if (input.length === 0) {
      permArr[permArr.length] = usedChars.join("");
    }
    console.log('ch', ch, 'input', input)
    permutation(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
}

test('permutation', () => {
  expect(permutation([1, 2, 3])).toEqual([1, 2, 3]);
  // expect(permutation([A, B, C], 2)).toEqual([[A, B], [A, C], [B, C]]);
})
