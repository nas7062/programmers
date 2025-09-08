function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];

  if (cacheSize === 0) return cities.length * 5;

  for (let city of cities) {
    city = city.toUpperCase();

    const idx = cache.indexOf(city);
    if (idx !== -1) {
      // cache hit
      cache.splice(idx, 1); // 기존 위치 제거
      cache.push(city);     // 맨 뒤에 넣기 (가장 최근)
      answer += 1;
    } else {
      // cache miss
      if (cache.length >= cacheSize) {
        cache.shift(); // 가장 오래된 것 제거
      }
      cache.push(city);
      answer += 5;
    }
  }
  return answer;
}