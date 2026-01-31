function solution(s) {
    var answer = 0;
    const numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    for(let i=0; i<numbers.length;i++) {
        s = s.split(numbers[i]).join(i);
    }
    return +s;
}