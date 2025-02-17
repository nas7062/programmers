function solution(numbers) {
    const arr =[ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    arr.forEach((nums, index) => { // numbers를 nums 기준으로 나누고 나눠진 부분을 index 값으로 합침.
    numbers = numbers.split(nums).join(index)}) 
  
  return Number(numbers); // 숫자로변환
}