function solution(arr, divisor) {
    // arr배열중 divisor으로 딱 나누어지는 것들만 필터 
    arr =arr.filter((item)=>item %divisor ===0);
    return arr.length ? arr.sort((a,b)=>a-b) : [-1];
    // arr의 길이가 0이면 [-1]반환 아니면 arr배열 정렬 후 반환
}