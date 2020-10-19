let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const [n, m] = input;

const solution = (n, m) => {
  const stack = [];
  const nums = new Array(n).fill(1).map((v, i) => v + i);

  const dfs = (idx) => {
    if (stack.length === m) {
      console.log(stack.join(' '))
      return;
    }

    for (let i = idx; i < n; i++) {
      stack.push(nums[i]);
      dfs(i);
      stack.pop();
    }
  }

  dfs(0);
}

solution(Number(n), Number(m))


// test('solution', () => {
  // expect(solution(3, 1)).toEqual([[1, 2, 3]]);
  // expect(solution(4, 2)).toEqual([[1, 1], [1, 2], [1, 3], [1, 4], [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4]])
  // expect(solution(3, 3)).toEqual([[1, 1, 1], [1, 1, 2], [1, 1, 3], [1, 2, 2], [1, 2, 3], [1, 3, 3], [2, 2, 2], [2, 2, 3], [2, 3, 3], [3, 3, 3]])
// });