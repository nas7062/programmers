function solution(my_string) {
    var answer = '';
    return [...my_string].map((item)=>item.toLowerCase()).sort().join('');
}