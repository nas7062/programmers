function solution(s, n) {
    var answer = '';
    for(let i=0;i<s.length;i++) {
        if(s[i]===" "){
              answer+=" ";
            continue;
        }
          
        let char =s.charCodeAt(i);
        console.log(char);
        if( char <=90) {
            if(char+n >90){
                char-=26;
            }
        }
        if(char <=122){
            if(char+n >122)
                char-=26;
        }
        char+=n;
        answer+=String.fromCharCode(char);
    };
    return answer;
}