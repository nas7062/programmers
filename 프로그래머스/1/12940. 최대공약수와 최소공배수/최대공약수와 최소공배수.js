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
function LCD(num1, num2) {
    let lcd = Math.max(num1, num2);
    while (true) {
        if (lcd % num1 === 0 && lcd % num2 === 0) {
            return lcd;
        }
        lcd++;
    }
}
function solution(n, m) {
    var answer = [];

    return  [GCD(n,m),LCD(n,m)];
}
