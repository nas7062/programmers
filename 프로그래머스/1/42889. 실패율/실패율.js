function solution(N, stages) {
    var answer = []; 
    var failstage =[];// 머무르고 있는 스테이지 
    var namuzi = stages.length; // stages 길이
    for(let i =1;i<=N;i++)
        {
            let cnt= 0;
            for(let j =0;j<stages.length;j++)
                {
                    if(stages[j]===i) // stages를 돌며 스테이지와 같은 숫자면 머무르고 있는 것
                        cnt++;
                }
            failstage.push({ stage:i ,failRate:cnt/namuzi}); // 스테이지 숫자와 스테이지 머무르고 있는 사람과 / 스테이지 통과한 사람의 수
            namuzi-=cnt; // 머무른 사람은 다음 스테이지를 갈 수 없음
        }
   failstage.sort((a,b)=>{
        if(b.failRate ===a.failRate) // failRate가 같다면 순서대로 
                  return a.stage-b.state;
       return b.failRate -a.failRate; // 아니면 내림차순
    });
    answer =failstage.map((item)=>item.stage) //stage만 출력하게함/
    return answer;
}