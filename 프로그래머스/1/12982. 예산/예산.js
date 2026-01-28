function solution(d, budget) {
    var answer = 0; 
    d.sort((a,b)=>a-b);
    let num  =budget;
    let sum =0;
    for(let s of d ) {
        
        if(sum+s >budget)
            break;
        else {
            sum+=s;
            answer++;
        }
    }
    return answer;
}