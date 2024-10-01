function solution(n) {
    var answer = 0;
    
    for(let i =n;i>=1;i--)
        {   
            var num=n;
            for(let j=i;j>=1;j--)
                {
                     num-=j;
                    if(num<0)
                        break;
                     if(num===0)
                     {
                        answer++;
                     }
                  
                }
            
        }
    return answer;
}