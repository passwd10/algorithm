// nCr

const final = [];

const combination = (source, target, n, r, count) => {
  if (r === 0) final.push(target);
  else if (n === 0 || n < r) return;
  else {
    target.push(source[count]);
    combination(source, Object.assign([], target), n - 1, r - 1, count + 1);
    target.pop();
    combination(source, Object.assign([], target), n - 1, r, count + 1);
  }
  if (count === 0) {
    console.log(final);
    return final;
  }
}

test('combination', () => {
  expect(combination(['a', 'b', 'c', 'd', 'e'],[], 5, 4, 0)).toBe(1);
})