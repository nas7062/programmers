function solution(my_string) {
    // filter를 사용해 my_string.index(item)번호와 idx가 같은것만 반환 후 문자열로 변환
    return [...my_string].filter((item,idx)=>my_string.indexOf(item) === idx).join('');
}