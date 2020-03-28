const solution = (user_id, banned_id) => {
  let collectBanArr = Array(banned_id.length).fill(null).map(_ => Array());
  let sum = 1;

  for (let i = 0; i < banned_id.length; i++) {
    for (let j = 0; j < user_id.length; j++) {
      if (checkId(user_id[j], banned_id[i])) {
        collectBanArr[i].push(banned_id[i])
      }
    }
  }

  console.log(collectBanArr)
  for (let i = 0; i < collectBanArr.length; i++) {
    let dupCnt = 0;
    for (let j = i + 1; j < collectBanArr.length; j++) {
      if (collectBanArr[i][0] === collectBanArr[j][0]) {
        dupCnt += 1;
        collectBanArr[j] = [1];
      }
    }
    let length = collectBanArr[i].length;
    console.log(length);
    if (dupCnt > 0) {
      for (let r = 0; r <= dupCnt; r++) {
        sum *= (length - r);
      }
      for (let r = 1; r <= dupCnt + 1; r++) {
        sum /= r;
      }
    } else {
      sum *= length;
    }
    // console.log(sum);
  }
  return sum;
}


const checkId = (userId, bannedId) => {
  if (userId.length !== bannedId.length) {
    return false;
  }

  const userArr = userId.split('');
  const banArr = bannedId.split('');

  for (let i = 0; i < userArr.length; i++) {
    if (banArr[i] === '*') {
      continue;
    }
    if (userArr[i] !== banArr[i]) {
      return false;
    }
  }

  return true;
}

const caculateCases = (arr) => {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    let cnt = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        cnt += 1;
        arr[j] = -1;
      }
    }
    arr[i] = -1;
    result *= cnt;
  }

  return result;
}

test('solution', () => {
  // expect(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])).toBe(2);
  // expect(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"])).toBe(2);
  expect(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])).toBe(3);
})

test('checkId', () => {
  expect(checkId("frodo", "fr*d*")).toBe(true);
  expect(checkId("frodo", "fr*c*")).toBe(false);
})