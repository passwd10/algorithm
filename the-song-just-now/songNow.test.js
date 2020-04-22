const solution = (m, musicinfos) => {
  musicinfos = musicinfos.map(v => v.replace(/C#/g, 'c')
    .replace(/D#/g, 'd')
    .replace(/F#/g, 'f')
    .replace(/G#/g, 'g')
    .replace(/A#/g, 'a')
    .replace(/E#/g, 'e'))
    .map(v => v.split(','));
  m = m.replace(/C#/g, 'c')
    .replace(/D#/g, 'd')
    .replace(/F#/g, 'f')
    .replace(/G#/g, 'g')
    .replace(/A#/g, 'a')
    .replace(/E#/g, 'e');

  let maxRefer = [`(None)`, 0]; // 제목, 시간

  musicinfos.forEach(music => {
    const [start, end, title, scale] = music;
    let fullScale = '';
    const time = end.split(':').map((t, i) => i === 0 ? t * 60 : +t).reduce((t, acc) => acc += t) - start.split(':').map((t, i) => i === 0 ? t * 60 : +t).reduce((t, acc) => acc += t);

    for (let i = 0; i < time; i++) {
      fullScale += scale[i % scale.length];
    }
    if (fullScale.split(m).length > 1 && maxRefer[1] < time) {
      maxRefer = [title, time];
    }
  })

  return maxRefer[0];
}

test('solution', () => {
  expect(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])).toBe("HELLO")
  expect(solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"])).toBe('FOO')
  expect(solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])).toBe('WORLD')
  expect(solution('ABC', ['13:00,13:05,WHY,ABCDEF', '13:00,13:05,WORLD,ABCDEF'])).toBe('WHY')
  expect(solution('ABC', ['13:00,13:05,WHY,ABCDEF', '13:00,13:06,WORLD,ABCDEF'])).toBe('WORLD')
})