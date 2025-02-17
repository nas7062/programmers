function solution(i, j, k) {
    var answer = 0;
    for(let s = i;s<=j;s++) {
        let str = s.toString();
        for(let t =0;t<str.length;t++) {
            if(str[t] === String(k)){
                answer++;
            }
        }
    }
    return answer;
}