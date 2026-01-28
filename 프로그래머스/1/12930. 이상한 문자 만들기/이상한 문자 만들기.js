function solution(s) {
    var answer = '';
    s = s.split(' ').map((item)=>item.split('').map((char,i)=>  i%2 ? char.toLowerCase() : char.toUpperCase()).join('')).join(' ');
    return s;
}