function solution(food) {
    var answer = [];
    let reverse = [];
    for(let i =1;i<=food.length;i++) {
        let num = food[i] /2;
        let str=  String(i).repeat(num);
        answer.push(str);
      
    }
    reverse = answer.slice().reverse().join('');
    return answer.join('') +'0' +reverse;
}