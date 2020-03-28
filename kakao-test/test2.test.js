/* 
튜플 특징
- 중복 가능
- 원소에 정해진 순서가 있음
- 원소 개수는 유한함

하나만 있는건 반드시 맨 앞
두개가 있는건 앞의 두자리
세개는 앞의 세자리
네개는 앞의 네자리

1. 길이별로 나열한다
2. 첫번째 배열의 경우 result배열의 맨 앞에 저장한다.
3. 두번째 배열부터는 result배열과 비교하여 맞는 위치에 넣는다.
   현재 튜플에서 result에 없는 수를 찾고 result.push
*/

const solution = (s) => {
  let arr = strToArr(s);
  arr.sort((a, b) => a.length - b.length);

  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < result.length; j++) {
      let index = arr[i].findIndex(v => v === result[j]);
      if (index !== -1) {
        arr[i][index] = -1;
      }
    }
    result.push(arr[i].filter(v => v !== -1)[0])
  }

  return result;
}

const strToArr = (str) => {
  return str.split('},{').map(v => v.replace(/\{|\}/g, "")).map(v => v.split(',').map(v => +v));
}

test('solution', () => {
  expect(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")).toEqual([2, 1, 3, 4]);
  // expect(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")).toBe([2, 1, 3, 4]);
})

test('strToArr', () => {
  expect(strToArr("{{2},{2,1},{2,1,3},{2,1,3,4}}")).toEqual([[2], [2, 1], [2, 1, 3], [2, 1, 3, 4]]);
})