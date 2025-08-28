function solution(number, limit, power) {
    var answer = 0;
    const arr = [];
    for (let n = 1; n <= number; n++) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                // 4의약수에서 2 의 경우 
                //1 추가
                if (n / i === i)
                    count++;
                // 4의약수에서 1 의 경우 1,4  2추가
                else 
                    count = count + 2;
            }
        }
        arr.push(count);
    }
    
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= limit)
            answer += arr[i];
        else 
            answer += power;
    }
    
    return answer;
}
