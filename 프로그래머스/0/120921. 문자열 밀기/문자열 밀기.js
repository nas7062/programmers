function solution(A, B) {
    var answer = -1;
    A= A.split('');
    for(let i =0;i<A.length;i++) {
       if(A.join('') ===B)
             return i;
        let p =A.pop();
        A.unshift(p);
        console.log(A.join(''));
         
         
    }
    return answer;
}