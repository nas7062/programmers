function solution(n, m, section) {
    var answer = 0;
    let arr = new Array(n).fill(1);
    for(let i =0;i<section.length;i++) {
        arr[section[i]] =0;
    }
    console.log(arr);
    for(let i =0;i<arr.length;i++) {
        if(arr[i] ===0) {
            for(let j =i;j<i+m;j++) {
                arr[j] =1;
            }
            answer++;
        }
    }   
 
    return answer;
}