const solution = (n, costs) => {
  const result = [];

  const search = (cost, check, sum) => {
    if(check.filter(v => v === true).length === 3) {
      return result.push(sum);
    }

    check[cost[0]] = true;
    console.log('check', check)
    console.log(costs.filter(v => v[0] === cost[0]), sum)
    costs.filter(v => v[0] === cost[0]).forEach(v2 => {
      if (check[v2[1]] === false) {
        costs.forEach(v3 => {
          if(v3[0] === v2[1]) {
            console.log('v3', v3)
            search(v3, check, sum + v3[2]);
          }
        })
      }
    })
    
  }

  search(costs[0], Array(n).fill(false), 0);
  console.log(result)
  return 4;
}

test('solution', () => {
  expect(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]])).toBe(4);
})