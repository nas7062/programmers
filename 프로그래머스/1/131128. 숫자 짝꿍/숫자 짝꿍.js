function solution(X, Y) {
    var answer = '';
    let xCnt = new Array(10).fill(0);
    let yCnt = new Array(10).fill(0);
    
    for(let x of X) {
        xCnt[Number(x)]++;
    }
    for(let y of Y) {
        yCnt[Number(y)]++;
    }
    for(let i=9;i>=0;i--) {
       let cnt = Math.min(xCnt[i],yCnt[i]);
        answer+= i.toString().repeat(cnt);
    }
    if(answer==='')
        return "-1";
    if(answer[0]==='0')
        return "0";
    return answer;
}