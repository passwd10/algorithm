const coordinate = new Map();
coordinate.set('1', [0, 0]);
coordinate.set('2', [0, 1]);
coordinate.set('3', [0, 2]);
coordinate.set('4', [1, 0]);
coordinate.set('5', [1, 1]);
coordinate.set('6', [1, 2]);
coordinate.set('7', [2, 0]);
coordinate.set('8', [2, 1]);
coordinate.set('9', [2, 2]);
coordinate.set('*', [3, 0]);
coordinate.set('0', [3, 1]);
coordinate.set('#', [3, 2]);

const solution = (numbers, hand) => {
  const result = [];
  let handPos = new Map();

  handPos.set('left', '*');
  handPos.set('right', '#');

  numbers.forEach(v => {
    let [newhandPos, curHand] = calculatePressNumber(handPos, v, hand);
    handPos = newhandPos;
    result.push(curHand);
  })

  return result.join('');
}

const calculatePressNumber = (handPos, pressNumber, majorHand) => {
  const leftNumber = [1, 4, 7];
  const rightNumber = [3, 6, 9];

  if (leftNumber.includes(pressNumber)) {
    return returnLeft(handPos, pressNumber);
  }
  if (rightNumber.includes(pressNumber)) {
    return returnRight(handPos, pressNumber);
  }

  const leftPos = coordinate.get(String(handPos.get('left')));
  const rightPos = coordinate.get(String(handPos.get('right')));
  const curPos = coordinate.get(String(pressNumber));

  const leftPathLength = Math.abs(curPos[0] - leftPos[0]) + Math.abs(curPos[1] - leftPos[1]);
  const rightPathLength = Math.abs(curPos[0] - rightPos[0]) + Math.abs(curPos[1] - rightPos[1]);

  if (leftPathLength < rightPathLength) {
    return returnLeft(handPos, pressNumber);
  }
  if (leftPathLength > rightPathLength) {
    return returnRight(handPos, pressNumber);
  }
  if (majorHand === 'right') {
    return returnRight(handPos, pressNumber);
  }
  if (majorHand === 'left') {
    return returnLeft(handPos, pressNumber);
  }
}

const returnLeft = (handPos, pressNumber) => [handPos.set('left', pressNumber), 'L'];
const returnRight = (handPos, pressNumber) => [handPos.set('right', pressNumber), 'R'];


test('solution', () => {
  expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")).toBe("LRLLLRLLRRL");
  expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")).toBe("LRLLRRLLLRR");
});

test('caculatePressNumber', () => {
  const handPos = new Map();
  handPos.set('left', '*');
  handPos.set('right', '#');
  // expect(calculatePressNumber(handPos, 1, 'right')).toEqual(handPos.set('left', 1));
  expect(calculatePressNumber(handPos, 8, 'right')).toEqual(handPos.set('left', 1));

})