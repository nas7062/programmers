function solution(s){
    var answer = true;
    let arr =[];
    for(let ch of s) {
        if(arr.length ===0) {
            if(ch ===")")
                return false;
          
        }
        if(arr[arr.length-2] ==="(" && arr[arr.length-1] === ")") {
            arr.pop();
            arr.pop();
        }
        arr.push(ch);
        
    }
    if(arr[arr.length-2] ==="(" && arr[arr.length-1] === ")") {
            arr.pop();
            arr.pop();
        }
    if(arr.length !==0)
        return false;
    return answer;
}