function solution(X, Y) {
    let countX = Array(10).fill(0);
    let countY = Array(10).fill(0);

    // X, Y의 각 숫자 개수를 저장
    for (let num of X) countX[num]++;
    for (let num of Y) countY[num]++;

    let result = [];

    // 공통 숫자 중 작은 개수만큼 결과에 추가
    for (let i = 9; i >= 0; i--) {
        let commonCount = Math.min(countX[i], countY[i]);
        result.push(String(i).repeat(commonCount));
    }

    let answer = result.join('');

    if (answer === "") return "-1"; // 공통 숫자가 없을 때
    
    // 모든 숫자가 0인지 확인 (내림차순을 했기때문에)
    if (answer[0] === '0') return "0";

    return answer;
}
