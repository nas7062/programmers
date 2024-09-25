function solution(n)
{
   var answer= 0;

 String(n).split("").map((item)=>answer+= +item);
    return answer;
}