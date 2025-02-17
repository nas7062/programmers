function solution(num_list, n) {
    var answer = [];
    
    for(let i =0;i<num_list.length;i+=n) {
       let arr =[];
        arr.push(num_list.slice(i,i+n));
        answer.push(arr);
    }
    return answer.flat(1);
}