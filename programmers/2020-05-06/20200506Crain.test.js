const solution = (board, moves) => {
  const newBoard = new Array(board.length).fill().map(v => Array());
  const basket = [];
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== 0) {
        newBoard[j].push(board[i][j]);
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    if (newBoard[moves[i] - 1].length !== 0) {
      basket.push(newBoard[moves[i] - 1].shift());
      if (basket[basket.length - 1] === basket[basket.length - 2]) {
        basket.pop();
        basket.pop();
        answer += 2;
      }
    }
  }
  return answer;
}

test('solution', () => {
  expect(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])).toBe(4);
})