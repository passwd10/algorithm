function chooseBestSum(t, k, ls) {
  const paths = getPaths(ls, k);
  let max = 0;

  paths.forEach((path) => {
    const sum = path.reduce((acc, distance) => acc += distance, 0);
    if (sum <= t && sum > max) {
      max = sum;
    }
  })

  return max === 0 ? null : max;
}

function getPaths(paths, selectCnt) {
  const result = [];
  let visited = new Array(paths.length).fill(false);

  const search = (index, tempPaths) => {
    if (tempPaths.length === selectCnt) {
      result.push(tempPaths);
      return;
    }

    for (let i = index; i < paths.length; i++) {
      if (visited[i]) return;
      visited[i] = true;
      search(i + 1, [...tempPaths, paths[i]]);
      visited[i] = false;
    }    
  }

  search(0, [])

  return result;
}
 
test.only('chooseBestSum', () => {
  expect(chooseBestSum(163, 3, [50, 55, 56, 57, 58])).toBe(163);
  expect(chooseBestSum(163, 3, [50])).toBe(null);
  expect(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])).toBe(228);
})

test('getPaths', () => {
  // expect(getPaths([50, 55, 56], 2)).toEqual([]);
  expect(getPaths([50, 55, 56, 57, 58], 4)).toEqual([]);
})