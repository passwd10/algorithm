// nCm
// a : 시작하는 수

let n = 4;
let m = 2;
let num = [1, 2, 3, 4];
let check = [];
let result = [];

const combination = (i, a) => {
  if (i === m) {
    let temp = [];
    for (let k = 0; k < m; k++) {
      temp.push(num[k]);
    }
    result.push(temp);
    // console.log('i', i, '\na', a, '\nresult', result)        
  }
  for (let k = a; k <= n; k++) {
    if (check[k] !== 1) {
      check[k] = 1;
      num[i] = k;
      combination(i + 1, k);
      check[k] = 0;
    }
  }
}

test('combination', () => {
  expect(combination(0, 1)).toEqual([1]);
})