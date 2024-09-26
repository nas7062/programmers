function solution(n, m, section) {
    var answer = 0;
    section=section.sort((a,b)=>a-b);
    var arr =new Array(n).fill(1);
    for(let i =0;i<n;i++)
        {
            arr[section[i]-1]--;
        }
    for(let i =0;i<n;i++)
        {
            if(arr[i]===0)
                {
                    for(let j=i;j<i+m;j++)
                        {
                            arr[j]++;
                        }
                    answer++;
                }
              
            
        }
    return answer;
}