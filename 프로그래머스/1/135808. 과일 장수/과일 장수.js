function solution(k, m, score) {
    var answer = 0;
    score =score.sort((a,b)=>b-a);
    for(let i =0;i<score.length+1;i+=m)
        {
            let p = score.slice(i,i+m);
            if(p.length<m)
                continue;
            else
                answer+=Math.min(...p)*m;
            
        }
   
    return answer;
}