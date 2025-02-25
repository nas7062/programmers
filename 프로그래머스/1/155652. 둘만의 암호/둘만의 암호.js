function solution(s, skip, index) {
    var answer = ''; // 결과 문자열 
    let skipNum =[]; // skip할 문자 배열
     for(let i=0;i<skip.length;i++) {
        let num =skip.charCodeAt(i);
            skipNum.push(num);
        }
    for(let i =0;i<s.length;i++) {
     let num= s.charCodeAt(i); 
     let idx =index; 
        while(idx--) { // 인덱스만큼 더해주기 위해 
            num++; // num++;
            if(num >122) 
                num-=26; //z가되면 a가 되도록
            while(skipNum.includes(num)) {  //skip숫자가 되면 한번더 num++
                 num++;
                if (num > 122) 
                    num-=26;   //z가되면 a가 되도록
                
            }  
        }
        answer+=String.fromCharCode(num);
    }
   
    return answer;
}