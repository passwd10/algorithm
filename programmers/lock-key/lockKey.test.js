/* 


- 자물쇠 격자 한칸의 크기는 N x N 크기의 정사각 격자
- 열쇠는 M x M 크기의 정사각 격자
- 자물쇠에는 홈이 파여있고 열쇠 또한 홈과 돌기가 있음
- 열쇠는 회정과 이동이 가능
- 열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열림
- 자물쇠 영역을 벗어난 부분의 열쇠의 홈과 돌기는 영향을 주지 않음
- 자물쇠 영역 내에서는 열쇠의 돌기와 자물쇠의 홈 부분이 정확히 일ㄹ치해야함
- 열쇠의 돌기와 자물쇠의 돌기가 만나면 안됨
- 자물쇠의 모든 홈을 채워야함(비어있는곳이 없어야 함)

## 2. 실행

1. 자물쇠가 뚫려있는 부분을 기준으로 새로운 배열을 만든다.
2. 배열을 열쇠와 비교하여 일치하거나 대칭하는 부분을 찾으면 true 찾지 못하면 false
*/

//[0, 0, 0]
//[1, 0, 0]
//[0, 1, 1]

const solution = (key, lock) => {
  lock = extractHole(lock);
  console.log(lock)
  //같거나 대칭이면 출력
  
}

const extractHole = (lock) => {
  const location = [];
  //구멍 찾기
  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock.length; j++) {
      if (lock[i][j] === 0) {
        location.push([i, j]);
      }
    }
  }

  //구멍을 기준으로 사각형 추출
  let garo = [];
  let saero = [];
  for (let i = 0; i < location.length; i++) {
      saero.push(location[i][0]);
      garo.push(location[i][1]);
  }
  
  let up = Math.min(...saero)
  let down = Math.max(...saero)
  let left = Math.min(...garo)
  let right = Math.max(...garo)

  let result = [];
  for (let i = up; i <= down; i++) {
    let temp = [];
    for (let j = left; j <= right; j++) {
      temp.push(lock[i][j])
    }
    result.push(temp);
  }

  return result;
}

const findSame = (key, lock) => {
  for (let a = 0; a < key.length; a++) {
    for (let b = 0; b < key[a].length; b++) {


      for (let i = 0; i < lock.length; i++) {
        for (let j = 0; j < lock[i].length; j++) {

          if (key[i][j] !== lock[i][j]) {

          }
        }
      }
    }
  }

}

test('solution', () => {
  expect(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]])).toBe(true);
  // expect(solution([[0, 0, 0], [1, 0, 1], [0, 0, 0]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]])).toBe(false);
  // expect(solution([[1, 0, 1], [0, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]])).toBe(true);
})

test('자물쇠에 홈부분만 출력', () => {
  expect(extractHole([[1, 1, 1], [1, 1, 0], [1, 0, 1]])).toEqual([[1, 0], [0, 1]]);
})

test.only('같은 부분을 찾으면 true', () => {
  expect(findSame([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 0], [0, 1]])).toBe(true);
})