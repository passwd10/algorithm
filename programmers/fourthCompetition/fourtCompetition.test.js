
const solution1 = n => Number.isInteger(Math.sqrt(n)) === true ? Math.pow(Math.sqrt(n) + 1, 2) : -1

const solution2 = n => {
    let x = 0;
    while (x * x < n) {
        x += 1;
    }

    if (x * x === n) {
        x += 1;
        return x * x;
    } else {
        return -1;
    }
}

test('solution', () => {
    expect(solution(121)).toBe(144);
    expect(solution(3)).toBe(-1);
})
