const solution = (k, room_number) => {
  for (let i = 0; i < room_number.length; i++) {
    for (let j = i + 1; j < room_number.length; j++) {
      if (room_number[i] === room_number[j]) {
        room_number[j] += 1;
      }
    }
    console.log(room_number)

  }

  return room_number;
}

test('solution', () => {
  expect(solution(10, [1, 3, 4, 1, 3, 1])).toEqual([1, 3, 4, 2, 5, 6]);
})