function solution(s) {
    var answer = '';
    s =s.split(" ");
    answer+=Math.min(...s);
    answer+=" ";
    answer+=Math.max(...s);
    return answer;
}