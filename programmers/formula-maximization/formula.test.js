/* 
식에 있는 수식이 뭐가있는지 확인하는 함수
수식의 우선순위 경우의 수를 모두 조합하는 함수
우선순위대로 계산하는 함수
*/

const solution = (expression) => {
  let result = [];

  combineFormulaPriority(findFormula(expression)).forEach(v => {
    result.push(calculateWithPriority(expression, v));
  })

  return Math.max(...result);
}

const findFormula = (expression) => {
  return [...new Set(expression.match(/\-|\+|\*/g))];
}

const combineFormulaPriority = (formulaArr) => {
  const result = []; //조합 목록

  const combine = (originArr, combineArr) => {
    if (combineArr.length === originArr.length) {
      return result.push(combineArr)
    }
    originArr.forEach(formular => {
      if (!combineArr.includes(formular)) {
        return combine(formulaArr, [...combineArr, formular]);
      }
    })
  }

  combine(formulaArr, []);

  return result;
}

const calculateWithPriority = (expression, formularPriorityArr) => {
  let temp = expression.split(/(\D)/g);

  for (const exp of formularPriorityArr) {
    while (temp.includes(exp)) {
      const idx = temp.indexOf(exp);
      temp = [...temp.slice(0, idx - 1), eval(temp.slice(idx - 1, idx + 2).join('')), ...temp.slice(idx + 2, temp.length)];
    }
  }
  return Math.abs(temp[0]);
}

test('solution', () => {
  expect(solution("100-200*300-500+20")).toBe(60420);
  expect(solution("50*6-3*2")).toBe(300);
});

test('식에 있는 수식이 뭐가있는지 확인하는 함수', () => {
  expect(findFormula("100-200*300-500+20")).toEqual(['-', '*', '+']);
  expect(findFormula("100-1+2")).toEqual(['-', '+']);
})

test('수식의 우선순위 경우의 수를 모두 조합하는 함수', () => {
  expect(combineFormulaPriority(['-', '+'])).toEqual([['-', '+'], ['+', '-']]);
});

test('우선순위대로 계산하는 함수', () => {
  expect(calculateWithPriority("50*6-3", ['-', '*'])).toBe(150);
  expect(calculateWithPriority("50*6-3*2", ['-', '*'])).toBe(300);
  expect(calculateWithPriority("100-200*300-500+20", ['-', '+', '*'])).toBe(18000);
});