function finn(num) {
    let cnt= 1;
    for(let i =num-1;i>=1;i--) {
        let sum =0;
        for(let j =i;j>=1;j--) {
           sum+=j;
            if(sum >num) {
                break;
            }
            if(sum ===num) {
                cnt++;
                break;
            }
            
        }
    }
    return cnt;
 }

function solution(n) {
    var answer = 0;
    answer= finn(n);
    return answer;
}