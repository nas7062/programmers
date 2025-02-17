function solution(bin1, bin2) {
    var answer = '';
    let arr1 = parseInt(bin1,2); // 10진수로 변환
    let arr2 = parseInt(bin2,2);// 10진수로 변환
    return (arr1+arr2).toString(2); //더한 후에 2진수로 변환
}