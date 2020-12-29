/* 
https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/combinations/__test__/combineWithRepetitions.test.js

중복순열 : 중복 가능한 n개중에 r개를 선택하는 경우의 수 (순서 상관있음)

조합 nCr : 서로 다른 n개중에 r개를 선택하는 경우의 수 (순서 상관없음)
중복조합 : 중복 가능한 n개중에 r개를 선택하는 경우의 수 (순서 상관없음)
*/

const permutation = (numbers, selectNumber) => {
  const result = [];

  const dfs = (arr, visited) => {
    if (arr.length === selectNumber) {
      result.push(arr);
      return;
    }

    numbers.forEach((number, i) => {
      if (visited[i] === false) { // 아직 방문하지 않았다면
        visited[i] = true;
        dfs([...arr, number], visited)
        visited[i] = false;
      }
    })
  }
  let visited = new Array(numbers.length).fill(false);

  dfs([], visited);
  return result;
}

const permutation2 = (numbers, selectNumber) => {
  const result = [];

  const dfs = (arr, save) => {
    if (save.length === selectNumber) {
      result.push(save);
      return;
    }

    arr.forEach((number, i, origin) => {
      const rest = origin.filter((_, idx) => idx !== i)
      dfs(rest, [...save, number])
    })
  }
  dfs(numbers, []);
  return result;
}

const permutationWithRepetitions = (numbers, selectNumber) => {
  const result = [];

  const dfs = (arr) => {
    if (arr.length === selectNumber) {
      result.push(arr);
      return;
    }

    numbers.forEach((number) => {
        dfs([...arr, number])
    })
  }

  dfs([]);
  return result;
}

const combination = (numbers, selectNumber) => {
  const result = [];

  const dfs = (arr, save) => {
    if (save.length === selectNumber) {
      result.push(save);
      return;
    }

    arr.forEach((number, i, origin) => {
      const rest = origin.slice(i + 1)
      dfs(rest, [...save, number])
    })
  }
  dfs(numbers, []);
  return result;
}

const combinationWithRepetitions = (numbers, selectNumber) => {
  const result = [];

  const dfs = (arr, save) => {
    if (save.length === selectNumber) {
      result.push(save);
      return;
    }

    arr.forEach((number, i, origin) => {
      const rest = origin.slice(i)
      dfs(rest, [...save, number])
    })
  }
  dfs(numbers, []);
  return result;
}

test('순열', () => {
  expect(permutation([1, 2, 3], 2)).toEqual([[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]])
});

test('중복순열', () => {
  expect(permutationWithRepetitions([1, 2, 3], 2)).toEqual([[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]);
});

test('조합', () => {
  // expect(combination([1, 2], 1)).toEqual([[1], [2]]);
  // expect(combination([1, 2], 2)).toEqual([[1, 2]]);
  // expect(combination([1, 2, 3], 2)).toEqual([[1, 2], [1, 3], [2, 3]]);
  expect(combination([1, 2, 3, 4], 3)).toEqual([]);
});

test('중복조합', () => {
  expect(combinationWithRepetitions([1, 2, 3], 3)).toEqual()
  expect(combinationWithRepetitions([1, 2, 3], 2)).toEqual([
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 2],
    [2, 3],
    [3, 3],
  ]);
});
