function solution(cipher, code) {
    var answer = '';
     [...cipher].forEach((item,index)=>(index+1)%code ===0 ?answer+=item : null);
                         
    return answer;
}