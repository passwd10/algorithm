const solution = (month, day) => {
    const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    
    return week[(addDayBeforeTheMonth(month) + day - 1) % 7]
}

const addDayBeforeTheMonth = month =>
    [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].filter((_, i) => month - 1 >= i).reduce((a,b) => a + b);


test('solution', () => {
    expect(solution(5,24)).toEqual('TUE');
})

test('addDayBeforeTheMonth', () => {
    expect(addDayBeforeTheMonth(1)).toBe(0);
    expect(addDayBeforeTheMonth(2)).toBe(31);
    expect(addDayBeforeTheMonth(3)).toBe(60);
})