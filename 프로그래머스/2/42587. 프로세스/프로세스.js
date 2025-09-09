function solution(priorities, location) {
  // 프로세스 중요도를 index 값과 함께 배열에 저장
  let queue = priorities.map((priority, index) => ({ priority, index }));
  let count = 0;

  while (queue.length > 0) {
    const currentProcess = queue.shift();
    const highestPriority = Math.max(
      ...queue.map((process) => process.priority)
    );

    if (currentProcess.priority < highestPriority) queue.push(currentProcess);
    else {
      count++;
      if (currentProcess.index === location) return count;
    }
  }
}