function solution(phone_number) {
    var answer = '';
    let len =phone_number.length;
    let starlen = phone_number.length -4;
    for(let i =0;i<len;i++) {
        if(i<starlen) {
            answer+='*';
        }
        else
            answer+=phone_number[i];
    }
    return answer;
}