function solution(new_id) {
    var answer = '';
    //1번
    new_id = new_id.toLowerCase();
    //2번
    for(let id of new_id) {
        if('a'<=id && 'z'>=id) {
            answer+=id;
        }
        if(0<=id && 9>=id) {
            answer+=id;
        }
        if(id==='-' || id ==="_" | id ===".") {
            answer+=id;
        }
    }
    //3번
    let result =[];
    for(let i =0;i<answer.length;i++) {
        result.push(answer[i]);
         if(result[result.length-2] ==="." && result[result.length-1] ===".") {
            result.pop();
        }
    }
    // 4번
    answer = result;
    if(answer[0] ==='.') {
        answer.shift();
    }
    if(answer[answer.length-1]==='.') {
        answer.pop();
    }
    //5번
    if(answer.length ===0) {
        answer.push("a");
    }
    // 6번
    if(answer.length >=16) {
        answer =answer.slice(0,15)
        if(answer[answer.length-1]===".") {
            answer.pop();
        }
    }
    //7번
    if(answer.length <=2) {
        while(answer.length <3) {
            answer.push(answer[answer.length-1]);
        }
    }
    return answer.join('');
}