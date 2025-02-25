function solution(s, skip, index) {
    var answer = '';
    let skipNum =[];
     for(let j=0;j<skip.length;j++) {
        let num =skip.charCodeAt(j);
            skipNum.push(num);
        }
    for(let i =0;i<s.length;i++) {
     let num= s.charCodeAt(i);
     let idx =index;
        while(idx--) {
            num++;
            if(num >122) 
                num=97;
            while(skipNum.includes(num)) {
                num++; 
                if (num > 122) 
                    num = 97;   
            }  
        }
        answer+=String.fromCharCode(num);
    }
   
    return answer;
}