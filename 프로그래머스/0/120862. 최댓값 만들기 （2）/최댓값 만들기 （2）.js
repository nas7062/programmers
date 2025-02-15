function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=>a-b);
    let arr1 = numbers[0]*numbers[1];
    let arr2 = numbers[numbers.length-1] * numbers[numbers.length-2];
    return arr1 > arr2 ? arr1 : arr2;
}