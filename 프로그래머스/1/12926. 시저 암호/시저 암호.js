function solution(s, n) {
    var answer = '';
    for(let i =0;i<s.length;i++) {
           if(s[i]=== " ") {
               answer+=' '
               continue;
           }
    let code =s[i].charCodeAt();
    // 대문자 처리
    if (code >= 65 && code <= 90) {
      code = ((code - 65 + n) % 26) + 65;
    }
    // 소문자 처리
    else if (code >= 97 && code <= 122) {
      code = ((code - 97 + n) % 26) + 97;
    }
        
    answer+=String.fromCharCode(code);
    }
    return answer;
}