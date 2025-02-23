function solution(n) {
    // n 을 2진수로 변환 후 나눈 후 filter를 이용해 1만 가지는 배열의 길이 알아냄
    var ntwo = n.toString(2).split("").filter((item)=>item==="1").length;
    for(let i=n+1;i<=1000000;i++){
        if(ntwo== i.toString(2).split("").filter((item)=>item==="1").length) 
            return i; // n이 가지는 1의 갯수와 같은 n보다 큰 숫자를 찾음 
    }
}