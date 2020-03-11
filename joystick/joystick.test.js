/*
1. 주어진 문자열의 문자들을 아스키코드로 변환한다.
2. 첫번째 문자의 아스키코드 - 65 를 했을 때 13보다 크면 ( 90 - 아스키코드 + 1 ) 13보다 작거나 같으면 ( 아스키코드 - 65 )를 한다.
3. 2번에서 나온 값을 count변수에 저장한다.
4. 첫번째 알파벳이 완성됐으면 오른쪽알파벳과 왼쪽알파벳 중 A가 아닌 알파벳을 먼저 만나는 문자를 확인하고 해당 문자까지 가는 거리를 count변수에 더한다.
5. 조이스틱이 가는 방향(왼쪽 오른쪽)이 정해지면 해당 방향으로 계속 알파벳을 변환하고 변환결과값을 count에 저장한다.
6. 알파벳이 완성될 때 마다 입력받은 알파벳과 비교하고, 알파벳이 같으면 count값을 반환한다.
*/

const getJoystickCount = (str) => {
  let count = 0;

  const strToAsci = str.split('').map((_, i) => str.charCodeAt(i));

  //방향 결정
  const firstAsci = strToAsci.shift();
  const direction = strToAsci.indexOf(65) < strToAsci.reverse().indexOf(65) ? 'reverse' : 'forward';

  strToAsci.reverse();
  strToAsci.unshift(firstAsci);

  //각 문자 변환 개수 합
  strToAsci.forEach((v, i) => {
    count += getAsciTransformCount(v)
  })

  const leng = strToAsci.length;

  //정방향 일때
  if (direction === 'forward') {
    for (let i = 0; i < leng; i++) {
      strToAsci.lastIndexOf(65) === strToAsci.length - 1 && strToAsci.splice(strToAsci.length - 1);
    }
    strToAsci.length - 1 <= 0 ? count += 0 : count += strToAsci.length - 1;
  }

  //반대방향 일때
  if (direction === 'reverse') {
    const reverseAsci = strToAsci.reverse().slice(0, leng - 1);

    for (let i = 0; i < leng; i++) {
      reverseAsci.lastIndexOf(65) === reverseAsci.length - 1 && reverseAsci.splice(reverseAsci.length - 1);
    }
    count += reverseAsci.length;
  }

  return count;
}

const getAsciTransformCount = (asci) => asci - 65 > 13 ? 90 - asci + 1 : asci - 65;

test('getJoystickCount', () => {
  expect(getJoystickCount('AABAAAAAAABBB')).toBe(15);
  expect(getJoystickCount('JAN')).toBe(23);
  expect(getJoystickCount('JEROEN')).toBe(56);
  expect(getJoystickCount('JEROENA')).toBe(56);
  expect(getJoystickCount('AAA')).toBe(0);
  expect(getJoystickCount('ABA')).toBe(2);
  expect(getJoystickCount('AZA')).toBe(2);
  expect(getJoystickCount('AAZA')).toBe(3);
  expect(getJoystickCount('AZZA')).toBe(4);
  expect(getJoystickCount('ZZZZ')).toBe(7);
  expect(getJoystickCount('AZAZ')).toBe(5);
  expect(getJoystickCount('ZZAZ')).toBe(6);
  expect(getJoystickCount('AMN')).toBe(27);
});

test('getAsciTransformCount', () => {
  expect(getAsciTransformCount(65)).toBe(0);
  expect(getAsciTransformCount(90)).toBe(1);
})