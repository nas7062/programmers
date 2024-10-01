function solution(n) {
    var answer = 0;
    var ntwo = n.toString(2).split("").filter((item)=>item==="1").length;
    for(let i=n+1;i<=1000000;i++)
        {
            if(ntwo== i.toString(2).split("").filter((item)=>item==="1").length)
            {
                answer= i;
                break;
            }
            
        }
    return answer;
}