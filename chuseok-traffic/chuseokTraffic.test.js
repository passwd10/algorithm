const solution = (lines) => {
  lines = lines.map(v => converseTime(v))
  let max = 1;

  for (let i = 0; i < lines.length - 1; i++) {
    let cnt = 1;
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[i][1] + 1 > lines[j][0]) {
        cnt += 1;
      }
    }
    if (cnt > max) {
      max = cnt;
    }
  }

  return max;
}

const converseTime = (time) => {
  let [_, S, T] = time.split(' ');
  let [hour, minute, second] = S.split(':');
  T = T.replace('s', '');

  hour = hour * 3600;
  minute = minute * 60;
  second = Number(second);
  return [Math.floor(Number(hour + minute + second + 0.001 - Number(T)) * 1000) / 1000, Math.floor(Number(hour + minute + second) * 1000) / 1000];
}

test('soluton', () => {
  expect(solution(['2016-09-15 01:00:04.001 2.0s'])).toBe(1);
  expect(solution(['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'])).toBe(1);
  expect(solution(['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s'])).toBe(2);
})

test('converseTimeToSecond', () => {
  expect(converseTime('2016-09-15 01:00:2.001 2.0s')).toEqual([3600.002, 3602.001]);
})