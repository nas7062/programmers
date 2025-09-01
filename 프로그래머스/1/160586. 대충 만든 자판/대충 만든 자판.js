function Search(ch, keymap) {
  let best = Infinity;

  for (const key of keymap) {
    const pos = key.indexOf(ch);
    if (pos !== -1) {
      best = Math.min(best, pos + 1); // 키 위치는 1부터
    }
  }

  return best === Infinity ? -1 : best; // 없으면 -1
}

function solution(keymap, targets) {
  const answer = [];

  for (const target of targets) {
    let sum = 0;
    let possible = true;

    for (const ch of target) {
      const p = Search(ch, keymap);
      if (p === -1) {          // 한 글자라도 없으면 불가능
        possible = false;
        break;
      }
      sum += p;
    }

    answer.push(possible ? sum : -1);
  }

  return answer;
}
