function solution(food) {
    var answer = '';
    var reverse = '';
    for(let i =1;i<food.length;i++) {
        let num = food[i]/2;
        answer+= i.toString().repeat(num);
        reverse+= i.toString().repeat(num);
    }
    answer+='0';
    answer+=reverse.split("").reverse().join('');
    return answer;
}