function solution(d, budget) {
    var answer = 0;
    var dis = d.sort((a,b)=>a-b);
    var sum =0;
    for(let d of dis)
        {
            sum+=d;
            if(sum>budget)
                break;
            answer++;
        }
    return answer;
}