/*
스택에 같은인형이 두개가 되면 없어진다.
*/

const solution = (board, moves) => {
  let newArr = removeZero(repositionBoard(board));
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    if (newArr[moves[i] - 1].length === 1) {
      stack.push(newArr[moves[i] - 1][0]);
      newArr[moves[i] - 1] = [];
    } else if (newArr[moves[i] - 1].length === 0) {
      continue
    } else {
      stack.push(newArr[moves[i] - 1].shift());
    }
  }

  return checkoutNum(stack);

}

const repositionBoard = (boardArr) => {
  let newArr = Array(boardArr.length).fill(null).map(_ => Array());

  for (let i = 0; i < boardArr.length; i++) {
    for (let j = 0; j < boardArr.length; j++) {
      newArr[j][i] = boardArr[i][j]
    }
  }

  return newArr;
}

const removeZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].filter(v => v !== 0)
  }
  return arr;
}

const checkoutNum = (arr) => {
  let answer = 0;
  while (true) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr[i] = 0;
        arr[i + 1] = 0;
        answer += 2;
        break;
      }
    }

    if (arr.findIndex(v => v === 0) !== -1) {
      arr = arr.filter(v => v !== 0);
    } else {
      break;
    }
  }

  return answer;
}

test('solution', () => {
  expect(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])).toBe(4);
})

test('repositionBoard', () => {
  expect(repositionBoard([[0, 0, 0], [1, 2, 1], [3, 2, 1]])).toEqual([[0, 1, 3], [0, 2, 2], [0, 1, 1]]);
})

test('removeZero', () => {
  expect(removeZero([[0, 1, 3], [0, 2, 2], [0, 1, 1]])).toEqual([[1, 3], [2, 2], [1, 1]]);
})

test('checkoutNum', () => {
  expect(checkoutNum([4, 3, 1, 1, 3, 2, 4])).toBe(4);
})