function solution(N, stages) {
    var answer = [];
    var failstage =[];
    var namuzi = stages.length;
   
    for(let i =1;i<=N;i++)
        {
             let cnt= 0;
            for(let j =0;j<stages.length;j++)
                {
                    if(stages[j]===i)
                        cnt++;
                }
            failstage.push({ stage:i ,failRate:cnt/namuzi});
            namuzi-=cnt;
        }
   failstage.sort((a,b)=>{
        if(b.failRate ===a.failRate)
                  return a.stage-b.state;
       return b.failRate -a.failRate;
    });
    answer =failstage.map((item)=>item.stage)
    
    return answer;
}