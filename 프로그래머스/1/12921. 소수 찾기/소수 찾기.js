function solution(n) {
    var answer = 0;
    let isPrime = new Array(n+1).fill(1);
    isPrime[0] = isPrime[1] = 0;
    for(let i =2;i*i<=n;i++) {
        for(let j =i*i;j<=n;j+=i) {
            isPrime[j] = 0;
        }
    }
    return isPrime.filter((x)=>x).length;
}