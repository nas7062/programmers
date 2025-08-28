function solution(array, commands) {
    var answer = [];
    commands.forEach((command)=> {
        const str = array.slice(command[0]-1,command[1]).sort((a,b)=>a-b);
        answer.push(str[command[2]-1]);
    })
    return answer;
}