function solution(n) {
    // index[0]이 존재하므로 배열을 num + 1로 선언
    let arr = Array(n + 1).fill(true)

        // 0과 1은 소수가 아님 => false 처리
    arr[0] = false
    arr[1] = false

        // 제곱근까지만 반복
    for(let i = 2; i * i <= n; i++) {
        if(arr[i]) {
            for(let j = i * i; j <= n; j += i) {
                // 배수라면 소수가 아님 => false
                                arr[j] = false 
            }
        }
    }

        // true 값만 출력
    return arr.filter(el => el).length
}