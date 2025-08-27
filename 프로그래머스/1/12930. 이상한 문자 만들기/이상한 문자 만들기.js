function solution(s) {
    var answer = '';
    s= s.split(' ');
    return s.map((item)=>item.split("").map((it,idx)=>idx%2 ? it.toLowerCase() : it.toUpperCase()).join('')).join(' ')
    return answer;
}