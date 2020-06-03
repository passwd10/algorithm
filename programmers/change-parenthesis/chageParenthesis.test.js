const changePar = (p) => {
  if (p.length === 0) {
    return '';
  }

  let [u, v] = dividePar(p);

  if (u[0] === ')') {
    u = u.substring(1, u.length - 1).split('').map(v => v === '(' ? ')' : '(').join('');
    console.log(u)
    return '(' + changePar(v) + ')' + u;
  } else {
    return v === '' ? u : u + changePar(v);
  }
}

const dividePar = (p) => {
  let result = [];
  let cnt = 0;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') {
      cnt += 1;
    } else {
      cnt -= 1;
    }
    if (cnt === 0) {
      result.push(p.substring(0, i + 1));
      result.push(p.substring(i + 1, p.length));
      break;
    }
  }

  return result;
}

const changePar2 = (p) => {
  let answer = "";
  let left = 0;
  let right = 0;
  let check = false;

  if (p.length === 0) {
    return '';
  }

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') left += 1;
    if (p[i] === ')') right += 1;

    if (right > left) check = true;
    if (left === right) {
      if (check === true) {
        answer = '(' + changePar(p.slice(i + 1, p.length)) + ')';
        for (let j = 1; j < i; j++) {
          if (p[j] === ')') answer += '(';
          if (p[j] === '(') answer += ')';
        }
        return answer;
      } else {
        answer += p.slice(0, i + 1);
        answer += changePar(p.slice(i + 1, p.length));
        return answer;
      }
    }
  }
}


test.only('changePar', () => {
  expect(changePar("))((")).toBe("()()");
  expect(changePar("))((()")).toBe("(())()");
  expect(changePar("))()(((())")).toBe("((()))()()");
  expect(changePar("()((())))(()")).toBe("()((()))(())");
  expect(changePar("(()())()")).toBe("(()())()");
  expect(changePar(")(")).toBe("()");
  expect(changePar("()))((()")).toBe("()(())()");
  expect(changePar(")()()(")).toBe("((()))");
})

test('dividePar', () => {
  expect(dividePar("(()())")).toEqual(["(()())", ""]);
  expect(dividePar("(()())()")).toEqual(["(()())", "()"]);
  expect(dividePar("()))((()")).toEqual(["()", "))((()"]);
  expect(dividePar("))()(((())")).toEqual(["))()((", "(())"]);
})