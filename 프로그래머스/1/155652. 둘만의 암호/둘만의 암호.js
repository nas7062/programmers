function solution(s, skip, index) {
    var answer = '';
    let skiparr =[]
    
    for(let sk of skip) {
        skiparr.push(sk.charCodeAt());
    }
    console.log(skiparr);
    for(let i =0;i<s.length;i++) {
        let ch =s[i].charCodeAt();
        let moved = 0;
        while (moved < index) {
            ch++;
            if (ch > 122) ch -= 26;
            if (!skiparr.includes(ch)) {
                moved++;
            }
        }
       answer+= String.fromCharCode(ch);
    }
  
    return answer;
}