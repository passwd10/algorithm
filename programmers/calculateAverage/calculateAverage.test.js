/*
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한사항
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
입출력 예
arr	[1,2,3,4]	[5,5]
return 2.5      5
*/

const calculateAverage = (str) => {
    
    return str.reduce((a, b) => a + b) / str.length;
}

test('calculateAverage', () => {
    expect(calculateAverage([1,2,3,4])).toBe(2.5);
    expect(calculateAverage([5,5])).toBe(5);
})