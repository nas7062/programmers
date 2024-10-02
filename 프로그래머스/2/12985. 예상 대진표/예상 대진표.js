function solution(n,a,b)
{
    var answer = 0;

    while(a!==b)
        {
            answer++;
            n/=2;
            a=Math.ceil(a/2);
            b=Math.ceil(b/2);
            

        }
    return answer;
}