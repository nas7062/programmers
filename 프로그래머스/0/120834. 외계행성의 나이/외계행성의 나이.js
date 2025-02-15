function solution(age) {
    var answer = '';
    
    return age.toString().split("").map((item,idx)=>String.fromCharCode(Number(item)+97)).join('');
}