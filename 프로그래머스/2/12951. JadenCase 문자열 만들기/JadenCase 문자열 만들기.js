function solution(s) {
    s =s.split(' ').map((item)=>item.split("").map((ch,idx)=>idx ===0 ? ch.toUpperCase() : ch.toLowerCase()).join('')).join(' ');
    return s;
}