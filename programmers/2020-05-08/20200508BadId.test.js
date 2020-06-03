const solution = (user_id, banned_id) => {
  const result = [];
  for (let i = 0; i < banned_id.length; i++) {
    result.push(checkId(banned_id[i], user_id));
  }

  const combArr = [];
  const search = (resultIdx, checked) => {
    if (resultIdx === result.length) {
      return checked.length === banned_id.length ?
        combArr.push(checked.sort((a, b) => a - b).join()) : 0;
    }
    for (let i = 0; i < result[resultIdx].length; i++) {
      if (checked.findIndex(v => v === result[resultIdx][i]) === -1) {
        search(resultIdx + 1, [...checked, result[resultIdx][i]]);
      }
    }
    if (resultIdx !== result.length - 1) {
      search(resultIdx + 1, checked);
    }
  }
  search(0, []);

  return [...new Set(combArr)].length;
}

const checkId = (id, user_id) => {
  const result = [];
  user_id.forEach((v, i) => {
    if (v.length === id.length) {
      let countSameChar = 0;
      let countOriginChar = 0;
      for (let j = 0; j < id.length; j++) {
        if (id[j] !== '*') {
          countOriginChar += 1;
          if (id[j] !== user_id[i][j]) {
            break;
          }
          countSameChar += 1;
        }
      }
      if (countSameChar === countOriginChar) {
        result.push(i);
      }
    }
  })
  return result;
}

test('solution', () => {
  expect(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])).toBe(2);
  expect(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"])).toBe(2);
  expect(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])).toBe(3);
})

test('checkId', () => {
  expect(checkId("fr*d*", ["frodo", "fradi", "crodo", "abc123", "frodoc"])).toEqual([0, 1]);
  expect(checkId("abc1**", ["frodo", "fradi", "crodo", "abc123", "frodoc"])).toEqual([3]);
})