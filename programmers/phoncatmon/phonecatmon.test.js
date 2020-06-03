const solution = (nums) => {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (result.findIndex(v => v === nums[i]) === -1) {
      result.push(nums[i])
    }
    if (result.length === nums.length / 2) {
      break;
    }
  }

  return result.length;
}

test('solution', () => {
  expect(solution([3, 1, 2, 3])).toBe(2);
  expect(solution([3, 3, 3, 2, 2, 4])).toBe(3);
})