function solution(food) {
    var answer = '';
    for(let i =0;i<food.length;i++) {
        answer+= i.toString().repeat(Math.floor(food[i]/2));
    } // i를 스트링으로 food[i]/2만큼 반복하여 문자열에 추가
    answer+='0'; // 0을 문자열에 추가
    for(let i =food.length;i>=0;i--) { // 반대로 추가 
        answer+= i.toString().repeat(Math.floor(food[i]/2));
    }
    return answer;
}