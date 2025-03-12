function solution(cacheSize, cities) { //  교체가 불가능 하면 miss 가능하면 hit 처음 들어갈때는 교체가 아니므로 miss
    var answer = 0;
    let Hit = 1;
    let Miss= 5;
    if(cacheSize ===0)
        return  Miss * cities.length; // 캐시 사이즈가 0이면 다 넣을수 없기 때문에 길이만큼 Cache miss
     const cache = [];

    cities.forEach((city)=> {
        city = city.toUpperCase(); // 전부 대문자로 바꿈 (통일하기 위해서)
        let idx = cache.indexOf(city);
        if(idx === -1) {
            if(cache.length >=cacheSize)
                cache.shift();
            answer+=Miss;
        }
        else {
            cache.splice(idx,1);
            answer+=Hit;
        }
        cache.push(city);
    })
    return answer;
}