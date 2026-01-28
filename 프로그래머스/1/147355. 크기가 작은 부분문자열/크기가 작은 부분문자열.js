function solution(t, p) {
    var answer = 0;
    const tlen = t.length;
    const plen = p.length;
    for(let i=0;i<=tlen-plen;i++) {
        let arr ='';
        for(let j =i;j<i+p.length;j++) {
            arr+=t[j];
        }
        
        if(+arr <= +p) answer++;
        
    }
    return answer;
}