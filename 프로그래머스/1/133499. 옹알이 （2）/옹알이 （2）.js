function solution(babbling) {
    var answer = 0;
    let arr =['aya','ye','woo','ma'];
    for(let b of babbling) {
        for(let ar of arr) {
           if(b.includes(ar.repeat(2)))
               break;
            b =b.split(ar).join(' ');
            console.log(b);
        }
if(b.split(" ").join("").length === 0){
            answer ++
        }
    }
    
    
    return answer;
}