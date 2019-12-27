
const getPrintOrder = (arr, location) => {
    return step(addLocation(arr), location, 1);
}

const step = (newArr, location, order) =>
        head(newArr).priority === Math.max(...newArr.map(v => v.priority)) ?
        head(newArr).location === location ? order : step(tail(newArr), location, order + 1)
        : step([...tail(newArr), head(newArr)], location, order);


const addLocation = arr => arr.map((v,i) => ({'priority' : v, 'location' : i}));

const head = arr => arr.slice(0, 1)[0];
const tail = arr => arr.slice(1);

test('getPrintOrder', () => {
    expect(getPrintOrder([2, 1, 3, 2], 2)).toBe(1);
})
