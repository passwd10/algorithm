const ironSticksCount = (arrangement) => {
    const stickArr = arrangement.split('');
    const stack = [];
    let count = 0;

    stickArr.forEach((v, i) => {
        if (v === '(') {
            stack.push(v);
        } else {
            if (stickArr[i - 1] === '(') {
                count += stack.length - 1;
            }
            if (stickArr[i - 1] === ')') {
                count += 1;
            }
            stack.pop();
        }
    })
    return count;
};


test('ironSticksCount', () => {
    expect(ironSticksCount('(((()())(())()))')).toBe(15);
    expect(ironSticksCount('()(((()())(())()))(())')).toBe(17);
})
