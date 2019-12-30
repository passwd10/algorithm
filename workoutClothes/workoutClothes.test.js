/* 
1. 학생수 n의 크기를 가진 student 배열을 만들고 1로 채워준다.
2. student 배열을 돌면서 lost배열의 요소와 일치하는 index를 만나면 -1, reserve 배열의 요소와 일치하는 index를 만나면 +1 을 해준다.
3. student 배열의 첫번째와 두번째 요소를 비교하여 하나가 0이고 하나가 2이면 둘을 1로 바꿔준다. 두번째 세번째, 세번쨰 네번째도 반복하여 바꿔준다.
4. student 배열의 1 이상의 값을 가진 요소의 개수를 반환한다.
5 |[2, 4] | [1, 3, 5] | 5
5 |[2, 4] | [3] | 4
3 |[3] | [1] | 2

*/

const getStudentArr = n => Array(n).fill().map(v => 1);

const modifyLost = (studentArr, lost) => {
    for (let i = 1; i < studentArr.length+1; i++) {
        for(let j = 0; j < lost.length; j++) {
            if (i === lost[j]) {
                studentArr[i-1] -= 1;
            }
        }
    }

    return studentArr;
}

const modifyReserve = (studentArr, reserve) => {
    for (let i = 1; i < studentArr.length+1; i++) {
        for(let j = 0; j < reserve.length; j++) {
            if (i === reserve[j]) {
                studentArr[i-1] += 1;
            }
        }
    }

    return studentArr;
}

const distributeClothes = studentArr => {
    for(let i = 0; i < studentArr.length; i++) {
        if (i+1 < studentArr.length && studentArr[i] === 0 && studentArr[i+1] === 2) {
            studentArr[i] = 1;
            studentArr[i+1] = 1;
        } else if (i+1 < studentArr.length && studentArr[i] === 2 && studentArr[i+1] === 0) {
            studentArr[i] = 1;
            studentArr[i+1] = 1;
        }
    }

    return studentArr;
}


const countWorkoutClothes = (n, lost, reserve) => {
    let resultArr;
    let count = 0;

    resultArr = modifyLost(getStudentArr(n), lost);
    resultArr = modifyReserve(resultArr, reserve);
    resultArr = distributeClothes(resultArr);

    resultArr.map(v => v >= 1 ? count += 1 : count);

    return count;
};


test('countWorkoutClothes', () => {
    expect(countWorkoutClothes(5, [2, 4], [1, 3, 5])).toBe(5);
    expect(countWorkoutClothes(5, [2, 4], [3])).toBe(4);
    expect(countWorkoutClothes(3, [3], [1])).toBe(2);
    expect(countWorkoutClothes(5, [2, 4], [2, 4])).toBe(5);
})

test('getStudentArr', () => {
    expect(getStudentArr(5)).toEqual([1, 1, 1, 1, 1]);
    expect(getStudentArr(4)).toEqual([1, 1, 1, 1]);
})

test('modifyLost', () => {
    expect(modifyLost([1, 1, 1, 1, 1], [2, 4])).toEqual([1, 0, 1, 0, 1]);
    expect(modifyLost([1, 1, 1, 1, 1], [1, 3, 5])).toEqual([0, 1, 0, 1, 0]);
})

test('modifyReserve', () => {
    expect(modifyReserve([1, 1, 1, 1, 1], [1, 3, 5])).toEqual([2, 1, 2, 1, 2]);
})

test('distributeClothes', () => {
    expect(distributeClothes([2, 0, 2, 0, 2])).toEqual([1, 1, 1, 1, 2]);
    expect(distributeClothes([2, 0, 2, 1, 2])).toEqual([1, 1, 2, 1, 2]);
})