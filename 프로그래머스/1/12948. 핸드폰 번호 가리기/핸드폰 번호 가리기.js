function solution(phone_number) {
    var answer = '';
    answer+='*'.repeat(phone_number.length-4);
    // repeat함수는 반복하는 함수 '*'을 phone_number.length-4만큼 반복.
    let seeNumber= [...phone_number].splice(phone_number.length-4).join('');
    // phone_number.length-4번 부터 뒤로 쭉 자르고 문자열로 변환
    return answer+seeNumber;
}