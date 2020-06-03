const solution = (cacheSize, cities) => {
  let cache = [];
  let answer = 0;
  cities = cities.map(v => v.toLowerCase());

  if (cacheSize === 0) {
    return 5 * cities.length;
  }

  for (let i = 0; i < cities.length; i++) {
    let index = cache.findIndex(v => v === cities[i]);
    if (cache.length < cacheSize && index === -1) {
      cache.push(cities[i]);
      answer += 5;
    } else {
      if (index > -1) {
        cache.push(cache[index]);
        cache.splice(index, 1);
        answer += 1;
      } else {
        cache.shift();
        cache.push(cities[i]);
        answer += 5;
      }
    }
  }

  return answer;
}

test('solution', () => {
  expect(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])).toBe(50);
  expect(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])).toBe(25);
  expect(solution(4, ['a','a','a','a'])).toBe(8);
  expect(solution(0, ['a','b','a','a'])).toBe(20);
})