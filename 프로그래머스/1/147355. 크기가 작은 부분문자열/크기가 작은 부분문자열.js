function solution(t, p) {
    var answer = 0;
    for(let i =0;i<t.length-p.length+1;i++) {
        let str ="";
        for(let j=i;j<i+p.length;j++){
            str+=t[j];
        }
        if(Number(p) >= Number(str))
            answer++;
        console.log(str);
    }
    return answer;
}