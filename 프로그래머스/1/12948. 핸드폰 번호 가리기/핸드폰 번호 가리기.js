function solution(phone_number) {
    var answer = '';
    var slice = phone_number.substr(phone_number.length-4);
    var start = "*".repeat(phone_number.length-4);
    return start+slice;
}