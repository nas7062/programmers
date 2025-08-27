function solution(d, budget) {
    var answer = 0;
    d = d.sort((a,b)=>a-b);
    let sum =0;
    for(let dd of d) {
        sum+=dd;
        answer++;
        if(sum > budget)
            return answer -1;
    }
    return answer;
}