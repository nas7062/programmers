function solution(id_pw, db) {
    var answer = '';
    const id =id_pw[0];
    const pw =id_pw[1];
    let cnt =0;
    db.forEach((item)=> {
        if(item[0]===id && item[1]===pw){
            answer="login";
             return answer;
        }
        else if(item[0]===id && item[1]!==pw) {
            answer="wrong pw";
             return answer;
        }
        else if(item[0]!==id){
           cnt++;
        }
        if(cnt===db.length){
            answer="fail";
        }
    })
    return answer;
}