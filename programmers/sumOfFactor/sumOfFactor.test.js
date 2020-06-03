
const solution1 = n => {
    let sum = 0;
    let num = 1;
  
    while (num <= n) {
        if (n % num === 0) {
            sum += num;
        }
        num += 1;
    }

    return sum;
}

const solution2 = n => n !== 0 ? Array(n).fill().map((_, i) => i + 1).filter(v => n % v === 0).reduce((a, b) => a + b) : n;

test('solution', () => {
    expect(solution(12)).toBe(28);
    expect(solution(5)).toBe(6);
})