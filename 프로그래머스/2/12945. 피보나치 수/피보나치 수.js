function solution(n) {
    let fib = [0, 1,1]; // 0번째, 1번째 값

    for (let i = 3; i <= n; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
    }

    return fib[n];
}