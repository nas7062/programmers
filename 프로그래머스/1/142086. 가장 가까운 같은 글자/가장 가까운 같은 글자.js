function solution(s) {
    var answer = [];
    let arr= [];
    for(let i =0;i<s.length;i++) {
        if(arr.indexOf(s[i]) === -1) // arr에서 s[i]를 찾지 못하면 arnwer에 -1 push
            answer.push(-1);
        else// arr에 s[i]가 있다면 현재 index - arr에 넣어논 s[i] 마지막 인덱스를 뺴줌 
            answer.push(i-arr.lastIndexOf(s[i])); 
        arr.push(s[i]); // arr에 s[i] 넣어줌
        
    }
    return answer;
}