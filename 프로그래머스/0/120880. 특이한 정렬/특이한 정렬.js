function solution(numlist, n) {
//or 연산자는 앞에 위치한 피연산자의 불린값을 따져서 false가 나오는 경우에만 다음 피연산자로 넘어가고 true일 경우 연산을 멈  추고 원래 값을 반환함 
//따라서 이 코드에서는 Math.abs(a - n) - Math.abs(b - n) 에서 값이 0이 나오기 전까진 앞의 로직만 실행되므로 절대값의 차이가 나는 경우 내림차순 정렬, 절대값 차이가 나지 않는 같은 값일 경우에는 기존값을 기준으로 비교(b-a)하여 오름차순 정렬이 실행됨.
    return numlist.sort((a,b)=>Math.abs(n-a)-Math.abs(n-b) || b-a);
}