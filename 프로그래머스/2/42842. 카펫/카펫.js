function solution(brown, yellow) {
    var answer = [];
    let sum = brown+yellow;
    for(let h =3;h<=brown;h++) {
       if(sum % h === 0){
            let w = sum / h;
           // 제일 바깥부분 제거하면 yellow 개수 
            if( (h-2) * (w-2) === yellow){
                return [w, h];
            }
        }
    }
    return answer;
}

// 8 1 
// 10 2
// 13 3
// 14 4