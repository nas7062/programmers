function solution(s) {
    let result = "";
    s =s.split(' ');
    return s.map((item)=>item.split('').map((item,idx)=>idx%2===0 ? item.toUpperCase() : item.toLowerCase()).join('')).join(' ');
}