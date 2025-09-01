function solution(s) {
    var answer = 0;
    let x =s[0];
    let xcnt =0;
    let ycnt =0;
    for(let i =0;i<s.length;i++) {
        if(x===s[i])
            xcnt++;
        else
            ycnt++;
        
        if(xcnt === ycnt) {
            answer++;
            xcnt=0;
            ycnt=0;
            x =s[i+1];
        }
    }
    if(xcnt !==0 || ycnt!==0)
        answer++;
    return answer;
}