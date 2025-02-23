function solution(s) {
    var answer = 0;
    let cnt= 0;
    while(s!=="1") {
        let result= [...s].filter((item)=>item ==='1');
        let len = result.length;
        let count = s.length-len;
        s =len.toString(2);
        cnt+=count;
        answer++;
    }
    return [answer,cnt];
}