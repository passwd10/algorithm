/*
1. 전체학생 배열을 1로 채운다
2. 여벌체육복을 가져온 학생은 + 1을 한다
3. 체육복을 잃어버린 학생은 -1을 한다
4. 내가 2이고 앞의 친구가 0이면 앞의 친구에게 1을 나눠준다
5. 내가 2이고 앞의 친구가 1이고 뒤의친구가 0이면 뒤에친구에게 1을 나눠준다
6. 내가 2이고 앞,뒤 모두 1이면 넘어간다.
*/

const solution = (n, lost, reserve) => {
  let clothesArr = new Array(n).fill(1);

  lost.forEach(v => {
    clothesArr[v - 1] -= 1;
  })

  reserve.forEach(v => {
    clothesArr[v - 1] += 1;
  })

  for (let i = 0; i < n; i++) {
    if (clothesArr[i] === 2) {
      if (clothesArr[i - 1] === 1 && clothesArr[i + 1] === 0) {
        clothesArr[i + 1] = 1;
      }
      if (clothesArr[i - 1] === 0) {
        clothesArr[i - 1] = 1;
      }
      clothesArr[i] = 1;
    }
  }

  return clothesArr.reduce((acc, v) => acc += v);
}

test('solution', () => {
  expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
  expect(solution(5, [2, 4], [3])).toBe(4);
})