function solution(n)
{
    var answer = 0;
   while(n) {
        answer+=Math.floor(n%10);
        n /=10;
   }
    return answer;
}