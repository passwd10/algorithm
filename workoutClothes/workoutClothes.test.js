const solution1 = (n, lost, reserve) => {
    let resultArr;
    let count = 0;

    resultArr = modifyLostReserve(n, lost, reserve);
    resultArr = distributeClothes(resultArr);
    resultArr.map(v => v >= 1 ? count += 1 : count);

    return count;
};

const modifyLostReserve = (n, lost, reserve) => {

    const studentArr = Array(n).fill().map(v => 1);

    lost.forEach(v => studentArr[v - 1] -= 1);
    reserve.forEach(v => studentArr[v - 1] += 1);

    return studentArr;
}

const distributeClothes = studentArr => {
    for (let i = 0; i < studentArr.length; i++) {
        if (i + 1 < studentArr.length && studentArr[i] === 0 && studentArr[i + 1] === 2) {
            studentArr[i] += 1;
            studentArr[i + 1] -= 1;
        } else if (i + 1 < studentArr.length && studentArr[i] === 2 && studentArr[i + 1] === 0) {
            studentArr[i] -= 1;
            studentArr[i + 1] += 1;
        }
    }
    return studentArr;
}

const solution = (n, lost, reserve) =>
    diff(lost, reserve).reduce(({ attendance, spares }, index) => {
        const check = [index - 1, index + 1].find(v => spares.includes(v));
        return check
            ? { attendance: n, spares: spares.filter(v => v !== check) }
            : { attendance: n - 1, spares: spares }
    }, { attendance: n, spares: diff(reserve, lost) }).attendance;

const diff = (a, b) => a.filter(v => !b.includes(v));

test('solution', () => {
    expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
    expect(solution(5, [2, 4], [3])).toBe(4);
    expect(solution(3, [3], [1])).toBe(2);
    expect(solution(5, [2, 4], [2, 4])).toBe(5);
});

test('modifyLostReserve', () => {
    expect(modifyLostReserve(5, [2, 4], [1, 3, 5])).toEqual([2, 0, 2, 0, 2]);
});

test('distributeClothes', () => {
    expect(distributeClothes([2, 0, 2, 0, 2])).toEqual([1, 1, 1, 1, 2]);
    expect(distributeClothes([2, 0, 2, 1, 2])).toEqual([1, 1, 2, 1, 2]);
});

test('diff(a, b) => a - b', () => {
    expect(diff([1, 2], [2, 4])).toEqual([1]);
    expect(diff([2, 4], [1, 2])).toEqual([4]);
    expect(diff([1], [1])).toEqual([]);
});