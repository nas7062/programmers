function solution(new_id) {
    var answer = '';
    new_id =new_id.toLowerCase();
    
   new_id = new_id.split("");
    let posible ='abcdefghijklmnopqrstuvwxyz0123456789-_.'.split(""); 
    for(let i=0;i<new_id.length;i++)
        {
            for(let j =0;j<posible.length;j++)
                {
                    if(new_id[i].includes(posible[j]))
                        answer+=new_id[i];
                }
        }
    answer = answer.split('');
    let newAnswer = [];
    for(let i =0;i<answer.length;i++)
        {
            if(answer[i]==='.'&&answer[i+1]==='.')
                continue;
            else
                newAnswer.push(answer[i]);
        }
    
    answer= newAnswer;
    if(answer[0]===".")
        answer.shift();
    if(answer[answer.length-1]===".")
        answer.pop();
    
    if(answer.length===0)
        answer.push("a");
    
    if(answer.length >=16)
        {
            answer =answer.slice(0,15);
            if(answer[answer.length-1]===".")
                answer.pop();
        }
    while(answer.length<3)
        {
            answer.push(answer[answer.length-1]);
        }
    return answer.join("");
}