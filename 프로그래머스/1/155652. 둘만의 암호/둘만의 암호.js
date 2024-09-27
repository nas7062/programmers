function solution(s, skip, index) {
    var answer = '';
    var skipnum =[];
    for(let i =0;i<skip.length;i++)
        {
            let temp = skip.charCodeAt(i);
            skipnum.push(temp);
        }
    console.log(skipnum)
    for(let i =0;i<s.length;i++)
        {
            let temp = s.charCodeAt(i);
            for(let j=0;j<index;j++)
                {
                    temp++;
                        if(temp>122)
                            temp=97;
                    while (skipnum.includes(temp)) 
                     {
                        temp++; 
                        if (temp > 122) {
                          temp = 97;
                        }
                    }
                }
            
            answer+=String.fromCharCode(temp);
        }
 return answer;   
}