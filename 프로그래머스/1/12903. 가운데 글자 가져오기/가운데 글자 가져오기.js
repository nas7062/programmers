function solution(s) {
    var answer = '';
    if(s.length%2) {
        return s[Math.floor(s.length/2)];
    }
    else 
        return s[Math.floor(s.length/2 -1)]+  s[Math.floor(s.length/2)]
    return answer;
}