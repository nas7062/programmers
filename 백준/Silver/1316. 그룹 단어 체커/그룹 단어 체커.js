let input = require('fs').readFileSync('/dev/stdin').toString().trim()
.split('\n');

// 담아놓을 배열 생성 
const arr =[];
// N개의 단어 넣어놓기
for(let i=1;i<input.length;i++) {
  arr.push(input[i]);
}
// 단어수
let answer =arr.length;
// 단어 입력
let temp ="";

arr.forEach((item)=> {
  //단어에서  첫번째 글짜부터 연속된 글자인지 확인
  temp = item[0];
  // 2번째 부터 탐색 시작 
  for(let i =1;i<item.length;i++) {
    // temp에 포함되어 있으면서 그전 문자와 지금 문자가 같지 않다면 break
    if(temp.includes(item[i]) && item[i-1] !==item[i]) {
      answer--;
      break;
    }
    temp+=item[i];
  }
})
  
console.log(answer);
