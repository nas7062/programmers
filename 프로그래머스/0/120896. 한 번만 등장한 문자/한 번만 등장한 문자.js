function solution(s) {
    var answer = '';
    let arr = new Array(26).fill(0);
    for(let i =0;i<s.length;i++) {
        let idx = s.charCodeAt(i)-97;
        arr[idx]++;
    }
    for(let i =0;i<arr.length;i++) {
        if(arr[i]===1) {
            answer+=String.fromCharCode(i+97);
        }
    }
    return answer;
}