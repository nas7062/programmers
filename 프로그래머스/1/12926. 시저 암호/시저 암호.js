function solution(s, n) {
    var answer = '';
    for(let i=0;i<s.length;i++) {
        if(s[i]===" "){ // 공백은 answer에 공백을 더해준 후 통과
              answer+=" ";
            continue;
        }
        let char =s.charCodeAt(i); // 문자를 아스키 코드로 변환
        if( char <=90) { // 'Z'가 90이므로  90보다 작을경우 
            if(char+n >90){ // 근데 +n만큼 더햇는데 90보다 커진다 그럼 -26
                char-=26;
            }
        }
        if(char <=122){ // 'z'가 122
            if(char+n >122)
                char-=26;
        }
        char+=n; //char에 n만큼 더해줌
        answer+=String.fromCharCode(char); // 숫자를 문자로 바꿔줌 
    };
    return answer;
}