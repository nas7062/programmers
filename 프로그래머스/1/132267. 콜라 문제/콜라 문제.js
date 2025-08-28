function solution(a, b, n) {
    var answer = 0;
    let bin =n;
    while(bin>=a) {
        let n1 = Math.floor(bin/a) *a;
        let n2 = Math.floor(bin%a);
        let n3 =Math.floor(bin/a)*b;
        console.log(n1,n2,n3);
        bin=  n2 +n3;
        answer+=n3;
    }
    return answer;
}

