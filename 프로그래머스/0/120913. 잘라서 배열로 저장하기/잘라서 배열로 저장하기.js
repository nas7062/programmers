function solution(my_str, n) {
    var answer = [];
    for(let i =0;i<my_str.length;i+=n) {
        let sliceArr = my_str.slice(i,i+n);
        answer.push(sliceArr);
    }
    return answer;
}