/*
1. 주어진 문자열의 문자들을 아스키코드로 변환한다.
2. 첫번째 문자의 아스키코드 - 65 를 했을 때 13보다 크면 ( 90 - 아스키코드 + 1 ) 13보다 작거나 같으면 ( 아스키코드 - 65 )를 한다.
3. 2번에서 나온 값을 count변수에 저장한다.
4. 첫번째 알파벳이 완성됐으면 오른쪽알파벳과 왼쪽알파벳 중 A가 아닌 알파벳을 먼저 만나는 문자를 확인하고 해당 문자까지 가는 거리를 count변수에 더한다.
5. 조이스틱이 가는 방향(왼쪽 오른쪽)이 정해지면 해당 방향으로 계속 알파벳을 변환하고 변환결과값을 count에 저장한다.
6. 알파벳이 완성될 때 마다 입력받은 알파벳과 비교하고, 알파벳이 같으면 count값을 반환한다.
*/

const getJoystickCount = (name) => {
  let nameLen = name.length;
  let answer = 0;
  let move = nameLen - 1; //최대 이동횟수

  for (let i = 0; i < nameLen; i++) {
    let startTo = name[i].charCodeAt() - 65;
    let endTo = 90 - name[i].charCodeAt() + 1;
    let next = i + 1; //정방향

    answer += startTo > endTo ? endTo : startTo; //위아래 이동횟수

    while (next < nameLen && name[next] === 'A') {
      next += 1;
    }
    console.log('i :', i, '\nnameLen :', nameLen, '\nnext :', next, '\nmove :', move);
    move = Math.min(move, (i + nameLen - next) + Math.min(i, nameLen - next));
    //i + nameLen - next : 왼쪽으로 돌아갔을 때 A가 아닌 것을 만날때 까지 이동한 횟수
    //Math.min(i, nameLen - next) => 현재 진행 인덱스, 뒤에서 가장 가까운 A가 아닌 인덱스 중 작은것
  }

  answer += move;
  return answer;
}

test('getJoystickCount', () => {
  expect(getJoystickCount('AABABAAAAAAABA')).toBe(11);
  // expect(getJoystickCount('AAAZA')).toBe(3);
  // expect(getJoystickCount('ABA')).toBe(2);
  // expect(getJoystickCount('JAN')).toBe(23);
  // expect(getJoystickCount('JEROEN')).toBe(56);
  // expect(getJoystickCount('JEROENA')).toBe(56);
  // expect(getJoystickCount('AAA')).toBe(0);
  // expect(getJoystickCount('AZA')).toBe(2);
  // expect(getJoystickCount('AZZA')).toBe(4);
  // expect(getJoystickCount('ZZZZ')).toBe(7);
  // expect(getJoystickCount('AZAZ')).toBe(5);
  // expect(getJoystickCount('ZZAZ')).toBe(6);
  // expect(getJoystickCount('AMN')).toBe(27);
  // expect(getJoystickCount('AABAAAAAAABBB')).toBe(12);
});