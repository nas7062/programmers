function solution(clothes) {
    var answer = 1;
    let map = new Map();
    clothes.forEach((clothe)=> {
        if(map.get(clothe[1])) {
            map.set(clothe[1], (map.get(clothe[1]) ?? 0) +1 ) 
        }
        else {
            map.set(clothe[1],1);
        }
        
    })
     // 모든 경우의 수를 구해야 하므로 +1을 하여 곱해준다. 안고를 경우도 추가해서 각각 +1 하는것.
    for (const [key, value] of map) {
        answer *= (value + 1)
    }
     // 아무것도 착용하지 않는 경우를 -1을 해준다.
     return answer - 1; 
}