function solution(arr) {
    let idx = arr.indexOf(Math.min(...arr)); // 최솟값 idx 찾기
    arr.splice(idx,1); // 최솟값 제거 
    if(arr.length === 0) // 자른 후 길이가 0 이면 [-1] 반환
        return [-1];
    return arr; 
}