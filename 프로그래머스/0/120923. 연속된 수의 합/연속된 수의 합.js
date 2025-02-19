function solution(num, total) {
    var answer = [];
    let idx= 0;
    for(let i =-100;i<=100;i++) { 
        let sum =0;
        for(let j =i;j<=i+num-1;j++){
            sum+=j;
        }
        
        if(sum ===total)
            idx =i;
    }
    for(let k=idx;k<idx+num;k++) 
            answer.push(k);
    return answer;
}