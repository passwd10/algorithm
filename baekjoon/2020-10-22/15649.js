/* 
1부터 n까지의 자연수 중 중복없이 m개를 고른 수열
*/

const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => Number(v));

const solution = (n, m) => {
  const nums = new Array(n).fill(1).map((v, i) => v + i);
  const stack = [];

  const dfs = (visited) => {
    if(visited.length === m) {
      console.log(visited.join(' '))
      return;
    }

    nums.forEach(num => {
      if (!visited.includes(num)) {
        stack.push(num);
        dfs([...stack])
        stack.pop();  
      }
    })
  }

  dfs([])
}

solution(n, m);
