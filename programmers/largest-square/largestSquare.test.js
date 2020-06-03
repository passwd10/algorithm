const solution = (board) => {
  const width = board.length;
  const length = board[0].length;
  let maxLen = 0;

  if (width === 1 || length === 1) return 1;

  for (let x = 1; x < width; x++) {
    for (let y = 1; y < length; y++) {
      if (board[x][y] !== 0) {
        let min = Math.min(board[x - 1][y - 1], board[x][y - 1], board[x - 1][y]);
        board[x][y] = min + 1;
        if (maxLen < board[x][y]) {
          maxLen = board[x][y];
        }
      }
    }
  }

  return maxLen * maxLen;
}

test('solution', () => {
  expect(solution([[1, 1, 1, 1]])).toBe(1);
  expect(solution([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]])).toBe(16);
  expect(solution([[1, 1, 1], [1, 1, 1], [1, 1, 1]])).toBe(9);
  expect(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]])).toBe(9);
  expect(solution([[0, 0, 1, 1], [1, 1, 1, 1]])).toBe(4);
})
