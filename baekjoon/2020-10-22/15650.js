/* 
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
- 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
- 고른 수열은 오름차순이어야 한다.
*/

const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => Number(v));

const solution = (n, m) => {
  const nums = new Array(n).fill(1).map((v, i) => v + i);
  const result = [];
  const stack = [];

  const dfs = (visited) => {
    if (visited.length === m) {
      visited.sort();
      const isDuplicate = result.findIndex(v => JSON.stringify(v) === JSON.stringify(visited))

      if (isDuplicate === -1) {
        console.log(visited.join(' '))
        result.push([...visited]);
      }

      return;
    }

    nums.forEach(num => {
      if(!visited.includes(num)) {
        stack.push(num);
        dfs([...stack]);
        stack.pop();  
      }
    })
  }

  dfs([]);
}

const solution2 = (n, m) => {
  const stack = [];

  const search = (start) => {
    console.log('start',start)
    if (stack.length === m) {
      console.log(stack);
      return;
    }
    for (let i = start; i <= n; i++) {
      stack.push(i);
      search(i + 1);
      stack.pop();
    }  
  }

  search(1);
}

solution(n, m)

// test('solution', () => {
//   expect(solution(3, 1)).toEqual([[1], [2], [3]]);
//   expect(solution(4, 2)).toEqual([
//     [1, 2],
//     [1, 3],
//     [1, 4],
//     [2, 3],
//     [2, 4],
//     [3, 4],
//   ])
//   expect(solution(4, 4)).toEqual([[1, 2, 3, 4]])
// });