function solution(numbers, hand) {
    var answer = '';
    let left= [1,4,7];
    let right=[3,6,9];
    let mid =[2,5,8,0];
    let lpos = 10;
    let rpos = 12;
   
            for(let i =0;i<numbers.length;i++)
                {
                    if(left.includes(numbers[i]))
                    {
                        answer+='L';
                        lpos = numbers[i];
                    }
                    if(right.includes(numbers[i]))
                    {
                        answer+='R';
                        rpos = numbers[i];
                    }
                    if(mid.includes(numbers[i]))
                    {
                        if(numbers[i]===0)
                            numbers[i]=11;
                        let L = Math.abs(numbers[i]-lpos);
                        let R = Math.abs(numbers[i]-rpos);
                        L = Math.floor(L/3)+Math.floor(L%3);
                         R = Math.floor(R/3)+Math.floor(R%3);
                        if(L===R)
                        {
                           if(hand==="right")
                              {
                                  answer+="R";
                                  rpos = numbers[i];
                              }
                            else
                                {
                                    answer+="L";
                                    lpos= numbers[i];
                                }
                        }
                        else if(L <R)
                            {
                                answer+="L"
                                lpos=numbers[i];
                            }
                        else
                        {
                            answer+="R";
                            rpos=numbers[i];
                        }
                    }
                
        }
    return answer;
}