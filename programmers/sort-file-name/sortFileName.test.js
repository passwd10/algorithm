/*
- HEAD는 숫자가 아닌 문자(최소 한글자 이상)
- NUMBER는 하글자에서 다섯글자 사이의 연속된 숫자(앞에 0가능)
- TAIL은 숫자가다시 나타날 수 있으며, 아무 글자도 없을 수 있다
정렬방법
- HEAD를 기준으로 사전순 정렬(대소문자 구분 X)
- NUMBER의 숫자 순으로 정렬(9 < 10 < 0011 < 012)
- HEAD, NUMBER같으면 원래 입력순서를 유지
*/

const solution = (files) => {
  files = files.map(v => v.split(''));

  for (let i = 0; i < files.length; i++) {
    let numStart = 0;
    let numEnd = 0;
    let cnt = 0;
    for (let j = 0; j < files[i].length; j++) {
      if (files[i][j].charCodeAt() >= 48 && files[i][j].charCodeAt() <= 57) {
        numEnd = j;
        cnt += 1;
      }
    }
    numStart = numEnd - cnt + 1;
    if (files[i].slice(numStart, numEnd + 1).join('') > 9999) {
      numEnd = numStart + 4;
    }
    files[i] = [files[i].slice(0, numStart).join(''), files[i].slice(numStart, numEnd + 1).join(''), files[i].slice(numEnd + 1).join('')]
  }

  files.sort((a, b) => {
    if (a[0].toLowerCase().localeCompare(b[0].toLowerCase()) < 0) {
      return -1;
    } else if (a[0].toLowerCase().localeCompare(b[0].toLowerCase()) > 0) {
      return 1;
    }
    return a[1] - b[1];
  })

  // files.sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()) === 0 ? a[1] - b[1] : a[0].toLowerCase().localeCompare(b[0].toLowerCase()))

  return files.map(v => v.join(''));
}

test('solutoin', () => {
  expect(solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG'])).toEqual(['img1.png', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png'])
  expect(solution(['MUZI010101.zip', 'muzi010101.png'])).toEqual(['MUZI010101.zip', 'muzi010101.png'])
  expect(solution(['muzi1.png', 'MUZI01.zip'])).toEqual(['muzi1.png', 'MUZI01.zip'])
  expect(solution(['muzi1.txt', 'MUZI1.txt', 'muzi001.txt', 'muzi1.TXT'])).toEqual(['muzi1.txt', 'MUZI1.txt', 'muzi001.txt', 'muzi1.TXT'])
  expect(solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat'])).toEqual(['A-10 Thunderbolt II', 'B-50 Superfortress', 'F-5 Freedom Fighter', 'F-14 Tomcat']);
})