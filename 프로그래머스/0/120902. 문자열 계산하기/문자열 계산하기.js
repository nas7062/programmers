function solution(my_string) {
    const arr = my_string.split(" ");
    let result = Number(arr[0]); // result를 split[0]으로 초기화 
    arr.forEach((item, index) => {
        if(item === "+"){ // 플러스일 경우 
            result += Number(arr[index + 1]);  //arr[i+1] 더하기
        }
        else if(item === "-"){ // 마이너스일 경우
            result -= Number(arr[index + 1]); // arr[i+1] 빼기
        }
    })
    return result;
}