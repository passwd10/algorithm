let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const solution = (num) => {
  let cnt = 0;

  const dfs = (nums) => {
    const sum = nums.reduce((acc, v) => acc + v, 0);
    if (sum === num) {
      cnt += 1;
      return;
    }
    if (nums.length >= num) {
      return;
    }
    
    dfs([...nums, 1])
    dfs([...nums, 2])
    dfs([...nums, 3])
  }

  dfs([])

  console.log(cnt);
}

for (let i = 1; i < Number(input[0]) + 1; i++) {
  solution(Number(input[i]))
}
