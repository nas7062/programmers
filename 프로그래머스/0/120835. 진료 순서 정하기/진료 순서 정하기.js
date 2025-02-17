function solution(emergency) {
    var answer = [];
    // slice를 해줘야 원본 배열이 바뀌지 않음 그후 내림차순으로 정렬(숫자가 낮을 수록 순서가 늦어짐)
    let sortedArr = emergency.slice().sort((a,b)=>b-a);
    // emergency를 돌며 sortedArr에 item이 몇번쨰인지 indexOf를 활용해 +1 해서 반환
    return emergency.map((item)=>sortedArr.indexOf(item)+1);
}