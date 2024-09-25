function solution(s) {
    var answer = [];
    var str=  "";
    
     for(let i =0;i<s.length;i++)
         {
             
             if(!str.includes(s[i]))
                 {
                     str+=s[i];
                     answer.push(-1);
                }
             else
                 {
                     let p = str.lastIndexOf(s[i]);
                     str+=s[i];
                     answer.push(i-p);
                 }
                 
         }
    
    return answer;
}