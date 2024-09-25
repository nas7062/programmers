function solution(array, commands) {
    var answer = [];
     commands.map((item)=>{
              let p=  array.slice(item[0]-1,item[1]).sort((a,b)=>a-b);
                        answer.push(p[item[2]-1]);
                
    });
    return answer;
}