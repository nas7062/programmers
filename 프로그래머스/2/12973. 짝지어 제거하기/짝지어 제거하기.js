function solution(s)
{
    var answer = -1;
    let arr =[];
    s= s.split('');
    while(s.length) {
        if(s[s.length-1] === s[s.length-2]) {
            s.pop();
            s.pop();
        }
        arr.push(s.pop());
        if(arr[arr.length-1] === arr[arr.length-2]) {
            arr.pop();
            arr.pop();
        }
    }
    return arr.length ===0 ? 1 : 0;
}