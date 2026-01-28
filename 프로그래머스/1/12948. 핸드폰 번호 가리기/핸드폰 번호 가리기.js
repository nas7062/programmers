function solution(phone_number) {
    var answer = '';
    let first = phone_number.slice(0,-4).split('').map((num)=>num.replace(num,'*')).join('');
    let second = phone_number.slice(-4);
    return first+second;
}