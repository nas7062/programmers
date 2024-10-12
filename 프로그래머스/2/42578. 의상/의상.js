function solution(clothes) {
    var answer = 1;
    var clothesMap = {};
    clothes.forEach((arr)=>{
        const [name,type]= arr;
        if(clothesMap.hasOwnProperty(type))
            clothesMap[type]++;
        else
            clothesMap[type]=1;
    })
    for(const key in clothesMap)
        {
            answer*=(clothesMap[key]+1);
        }
    return answer-1;
}