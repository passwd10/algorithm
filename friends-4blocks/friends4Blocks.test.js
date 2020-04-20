const solution = (m, n, board) => {
  let verBoard = addCheckValue(changeHorToVer(board));
  let answer = 0;

  while (true) {
    verBoard = removeCheckTrue(check2X2(verBoard));
    let cnt = 0;
    for (let i = 0; i < verBoard.length; i++) {
      for (let j = 0; j < verBoard[i].length; j++) {
        if (verBoard[i][j] === -1) {
          cnt += 1;
        }
      }
    }
    if (cnt === answer) {
      break;
    } else {
      answer = cnt;
    }
  }

  return answer;
}

const changeHorToVer = (arr) => {
  let result = [];
  for (let i = 0; i < arr[0].length; i++) {
    let str = '';
    for (let j = 0; j < arr.length; j++) {
      str += arr[j][i];
    }
    result.push(str);
  }
  return result;
}

const addCheckValue = (arr) => {
  let result = Array(arr.length).fill().map(_ => Array());

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result[i].push({ value: arr[i][j], check: false });
    }
  }

  return result;
}

const check2X2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[0].length - 1; j++) {
      if (arr[i][j] !== -1 && arr[i][j].value === arr[i][j + 1].value &&
        arr[i][j].value === arr[i + 1][j].value &&
        arr[i][j].value === arr[i + 1][j + 1].value) {
        arr[i][j].check = true;
        arr[i][j + 1].check = true;
        arr[i + 1][j].check = true;
        arr[i + 1][j + 1].check = true;
      }
    }
  }
  return arr;
}

const removeCheckTrue = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].check === true) {
        arr[i].splice(j, 1);
        arr[i].unshift(-1);
      }
    }
  }
  return arr;
}

test('solution', () => {
  expect(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])).toBe(14);
  expect(solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])).toBe(15);
})

test('가로배열을 세로배열로 변경', () => {
  expect(changeHorToVer(['abc', 'abc', 'abc'])).toEqual(['aaa', 'bbb', 'ccc']);
})

test('객체배열로 변환', () => {
  expect(addCheckValue(['aa', 'bb', 'cc'])).toEqual([
    [{ value: 'a', check: false }, { value: 'a', check: false }],
    [{ value: 'b', check: false }, { value: 'b', check: false }],
    [{ value: 'c', check: false }, { value: 'c', check: false }]
  ]);
})

test('2x2의 동일한 알파벳 찾아서 check', () => {
  expect(check2X2([
    [{ value: 'a', check: false }, { value: 'a', check: false }],
    [{ value: 'a', check: false }, { value: 'a', check: false }],
    [{ value: 'c', check: false }, { value: 'c', check: false }]
  ])).toEqual([
    [{ value: 'a', check: true }, { value: 'a', check: true }],
    [{ value: 'a', check: true }, { value: 'a', check: true }],
    [{ value: 'c', check: false }, { value: 'c', check: false }]
  ])
})

test('check값이 true이면 값 삭제하고 맨 위에서 삭제한만큼 공백값 채운다', () => {
  expect(removeCheckTrue([
    [{ value: 'b', check: false }, { value: 'a', check: true }, { value: 'a', check: true }],
    [{ value: 'b', check: false }, { value: 'a', check: true }, { value: 'a', check: true }],
    [{ value: 'a', check: false }, { value: 'c', check: false }, { value: 'c', check: false }]
  ])).toEqual([
    [-1, -1, { value: 'b', check: false }],
    [-1, -1, { value: 'b', check: false }],
    [{ value: 'a', check: false }, { value: 'c', check: false }, { value: 'c', check: false }]
  ])
})