
const getHindex = (arr) => {
    let h = 0;
    arr = arr.sort((a, b) => a - b);

    while (true) {
        arr = arr.filter(v => v > h)
        if (h >= arr.length) {
            return h;
        }
        h += 1;
    }
}

test('getHindex', () => {
    expect(getHindex([3, 0, 1, 5, 6])).toBe(3);
    expect(getHindex([0, 0, 0, 0, 1])).toBe(1);
    expect(getHindex([0, 1, 1, 1, 5, 8, 10, 15, 20])).toBe(5);
    expect(getHindex([0, 1, 1, 1, 4, 8, 10, 15, 20])).toBe(4);
    expect(getHindex([0, 1, 1, 1, 1, 8, 10, 15, 20])).toBe(4);
    expect(getHindex([1, 2, 3, 4, 5])).toBe(3);

})