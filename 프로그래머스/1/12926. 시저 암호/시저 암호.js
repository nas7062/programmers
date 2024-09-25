function solution(s, n) {
    var answer = '';

    for(let i =0;i<s.length;i++)
        {
            if(s[i]===" ")
                answer+=" ";
            else
                {
                    let char = s.charCodeAt(i);
                    if(char <=90)
                        {
                            char+=n;
                            if(char>90)
                                char-=26;
                        }
                    else
                    {
                        char+=n;
                        if(char >122)
                           char-=26;
                    }
                    answer+=String.fromCharCode(char);
                }      
        }
    return answer;
}