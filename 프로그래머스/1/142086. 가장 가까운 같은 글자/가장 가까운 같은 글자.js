function solution(s) {
    var answer = [];
    let arr =[];
    for(let i =0;i<s.length;i++) {
        if(arr.lastIndexOf(s[i]) !== -1) {
            answer.push(i-arr.lastIndexOf(s[i]));
            arr.push(s[i]);
       }
        else{
            answer.push(-1)
            arr.push(s[i]);
        }
    }
    return answer;
}