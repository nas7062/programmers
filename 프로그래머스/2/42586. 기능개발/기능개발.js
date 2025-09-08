// 시뮬레이션 고친 버전
function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length) {
    // 1) 하루 동안 모든 작업 진행
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    // 2) 하루 끝나고, 앞에서부터 연속 완료된 작업들 제거/집계
    let shipped = 0;
    while (progresses.length && progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();          // ✅ 같이 제거
      shipped++;
    }

    // 3) 오늘 배포가 있었다면 기록
    if (shipped > 0) {
      answer.push(shipped);
    }
  }

  return answer;
}