function solution(quiz) {
    var answer = [];
    quiz = quiz.map((item)=>item.split(" ")); //공백으로 나눔 
    for(let i =0;i<quiz.length;i++) {
        const [one,char,two,nn,sum] = quiz[i]; // 구조분해할당 사용
        if(char === "-") { // -일경우
            if(Number(sum) !== Number(one) -Number(two)) // sum이 one -two일경우
                answer.push("X");
            else  // 아닐경우
                answer.push("O");
        }
        else { // + 일경우
            if(Number(sum) !== Number(one) + Number(two))
                answer.push("X");
            else
                answer.push("O");
        }
    }
    return answer;
}