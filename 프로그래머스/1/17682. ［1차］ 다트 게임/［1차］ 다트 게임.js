function solution(dartResult) {
    var answer = 0;
    var score=[];
    var idx =-1;
    let number = 0;
    for(let i =0;i<dartResult.length;i++)
        {
            
            if(dartResult[i]>="0" &&dartResult[i]<="9")
            {
                
                if(dartResult[i]==="1"&& dartResult[i+1]==="0")
                    {
                        number = 10;
                        i++;
                    }
                    
                else
                    number = Number(dartResult[i]);
                idx++;
                score[idx]= number;
            }
             if(dartResult[i]==="S")
                {
                    score[idx] = score[idx];
                }
                
             if(dartResult[i]==="D")
                {
                   score[idx] = Math.pow(score[idx],2);
                }
                
              if(dartResult[i]==="T")
                {
                     score[idx] = Math.pow(score[idx],3);
                }
             if(dartResult[i]==="#")
                {
                     score[idx] = -score[idx];
                }
             if(dartResult[i]==="*")
                {
                    score[idx] =score[idx]*2;
                    if(idx>0)
                        score[idx-1] = score[idx-1] *2;
                }
             
            console.log(answer);
        }
    return score.reduce((a,b)=>a+b,0);
}