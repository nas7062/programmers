function solution(s) {
    let x =s[0]; // x를 s 0번쨰로 초기화 
    let result =[]; // 잘라낸 문자열 담아둘 배열
    let xCnt =1; // x와 같은것을 세는 변수 1로시작
    let cnt =0; // x와 다른것들 세는 변수
    for(let i =1;i<=s.length*2;i++) {
        if(x!=s[i])
            cnt++;
        else
            xCnt++;
        if(cnt===xCnt) {
             if (i + 1 < s.length)
                x = s[i + 1];
            result.push(s.slice(i-cnt-xCnt+1,i+1)); //현재에서 cnt xcnt 빼준값 +1 부터 현재 배열까지 자름
            cnt=0;
            xCnt=0;
        }
    }
    return result.length;
}