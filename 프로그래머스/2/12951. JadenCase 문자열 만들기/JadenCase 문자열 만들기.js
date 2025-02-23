function solution(s) {
    s=s.split(' '); 
    return s.map((item)=>item.split('').map((item,idx)=>idx===0 
    ? item.toUpperCase() :item.toLowerCase()).join('')).join(' ');
    // 공백으로 나누고 나뉜 배열을 다시 문자로 나눈 후 idx ===0 이라면(첫번째 글자라면) 대문자로 나머지는 소문자로 변환 하고 문자열로 다시 합쳐줌
}