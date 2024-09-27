function solution(s) {
    var answer = [];
    let x= s[0];
    let cnt =[1,0];
    for(let i =1;i<=s.length*2;i++)
        {
            if(x!==s[i])
                cnt[1]++;
            else if(x===s[i])
                cnt[0]++;
            if(cnt[0]===cnt[1])
            {
                answer.push(s.slice(i-cnt[0]-cnt[1]+1,i+1));
                x=s[i+1];
                cnt[0]=0;
                cnt[1]=0;
                
            }
            
        }
    return answer.length;
}