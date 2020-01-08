
const solution = (requestArr, budget) => {
    const sortArr = requestArr.sort((a, b) => a - b);
    return requestArr.length - cantGetBudget(sortArr, budget).length;
}

const cantGetBudget = (sortArr, budget) =>
        budget - HEAD(sortArr) >= 0
        ? cantGetBudget(TAIL(sortArr), budget - HEAD(sortArr))
        : sortArr;

const HEAD = arr => arr.slice(0, 1)[0];
const TAIL = arr => arr.slice(1);

test('solution', () => {
    expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);
    expect(solution([2, 2, 3, 3], 10)).toBe(4);
})

test('cantGetBudget', () => {
    expect(cantGetBudget([1, 2, 3], 1)).toEqual([2, 3]);
    expect(cantGetBudget([1, 2, 3, 4, 5], 9)).toEqual([4, 5]);
})