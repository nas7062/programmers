function solution(cards1, cards2, goal) {
  let i = 0; // cards1 포인터
  let j = 0; // cards2 포인터

  //goal을 돌면서 먼저 cads1 부터 찾은 후 없다면 cards2에서 찾고 있다면 그 다음 꺼로 가게끔 
  for (const word of goal) {
    if (i < cards1.length && cards1[i] === word) {
      i++;            
    } else if (j < cards2.length && cards2[j] === word) {
      j++;      
    } else {
      return "No";
    }
  }
  return "Yes";
}