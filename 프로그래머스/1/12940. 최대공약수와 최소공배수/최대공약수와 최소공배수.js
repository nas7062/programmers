function GCD(num1,num2)
{
    let gcd= 1;
    for(let i =2;i<=Math.min(num1,num2);i++)
        {
            if(num1%i ===0 && num2%i===0)
                gcd=i;
        }
    return gcd;
}
function LCD(num1,num2)
{
    let lcd = Math.max(num1,num2);
    for(let i =lcd;i<=1000001;i++)
        {
            if(i%num1===0 && i%num2 ===0)
                return i;
        }
    return lcd;
}
function solution(n, m) {
    var answer = [];

    return  [GCD(n,m),LCD(n,m)];
}