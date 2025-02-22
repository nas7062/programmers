function solution(s) {
    let numbersArr =["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i =0;i<numbersArr.length;i++) { // numbersArr 돌며 요쇼로 split 후 index를 넣어줌
        s=s.split(numbersArr[i]).join(i);
    }
    
    return Number(s); // 마지막에 숫자로 변환
}