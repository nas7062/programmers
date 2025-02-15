function solution(rsp) {
    var answer = '';
    for(let m of rsp) {
        if(m==='2')
            answer+="0";
        else if(m==="0")
            answer+="5"
        else 
            answer+="2";
    }
    return answer;
}