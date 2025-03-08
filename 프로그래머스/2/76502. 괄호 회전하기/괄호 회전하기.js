function solution(s) {
    var answer = 0;
    let cnt =0;
     let arr =s.split('');
    while(cnt !=arr.length) {
        if(check(arr) ===true)
            answer++;
        let p  =arr.shift();
        arr.push(p);      
        cnt++;
    }
    return answer;
}

function check(arr) {
    let stack =[];
    for(let ar of arr) {
        if(stack[stack.length-1] ==="[" && ar==="]")
            stack.pop();
         else if(stack[stack.length-1] ==="{" && ar==="}")   stack.pop();
        else if(stack[stack.length-1] ==="(" && ar===")")   stack.pop();
        else
            stack.push(ar);
      
    }

    return stack.length ? false : true;
}