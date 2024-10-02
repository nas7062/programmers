function gcd(a,b){
    let gcd =1;
    for(let i =1;i<=Math.min(a,b);i++)
        {
            if(a%i===0 && b%i===0)
                gcd = i;
        }
    return gcd;
}
function lcm(a,b)
{
    return a*b /gcd(a,b);
}
function solution(arr) {
    var answer = 1;
    for(let i=0;i<arr.length;i++)
        {
            answer=  lcm(answer,arr[i]);
        }
    return answer;
}