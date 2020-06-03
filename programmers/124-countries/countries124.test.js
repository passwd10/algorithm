/*
1. 입력받은 자연수를 3으로 나눈다.
2. 나머지가 0인 경우에만 앞에서 4를 넣어주고 몫- 1을 해준다.
3. 나머지가 1, 2인 경우엔 나눈 몫을 다시 3으로 나눠주고 나머지를 앞에서 넣어준다.
4. 나누기를 반복하다가 몫이 0이 되면 나누기를 멈추고 마지막 계산에서 나온 나머지를 앞에서 넣어준다.
5. 이 때 나머지가 0이 나오면 4를 넣어준다.
*/

const get124CountriesNum = (num) => {
  let result = [];
  let rest = 0;

  while (num > 0) {
    rest = num % 3;
    if (rest === 0) {
      result.unshift(4);
      num = num / 3 - 1;
    } else {
      result.unshift(rest);
      num = Math.floor(num / 3);
    }
  }

  return +result.join('');
}

test('get124CountriesNum', () => {
  expect(get124CountriesNum(9)).toBe(24);
})