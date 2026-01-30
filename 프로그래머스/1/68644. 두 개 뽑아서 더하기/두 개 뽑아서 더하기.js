function solution(numbers) {
    var answer = [];
    let len=  numbers.length; // numbers배열 길이
    for(let i =0;i<len-1;i++) {  // 완전탐색 
        for(let j=i+1;j<len;j++){ 
            let sum =numbers[i]+numbers[j]; // 인덱스가 다른 모든 경우의 수 더함
            answer.push(sum);
        }   
    }
    let set = [...new Set(answer)]; // 중복제거
    return set.sort((a,b)=>a-b); // 마지막에 오름차순 정렬
}