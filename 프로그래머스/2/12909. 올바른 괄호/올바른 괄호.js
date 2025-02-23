function solution(s){
    var answer = true;
    let result =[];
    for(let a of s) {
        if(result.length ===0 && a ===")")
            return false;
        if(a==="(")
            result.push(a);
        if(a===")")
            result.pop();
    }

    return result.length ===0 ? true :false;
}