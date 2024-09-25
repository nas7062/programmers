function solution(num) {
    var answer = 0;
    var n = num;
    while(n!==1)
        {
            if(n%2===0)
                n=n/2;
            else
                n=n*3+1;
            answer++;
        }
    return answer >500 ? -1 : answer;
}