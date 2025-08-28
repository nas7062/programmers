function solution(strings, n) {
    const result = strings.sort((a, b) => {
      if (a[n] === b[n]) {
        // n번째 글자가 같으면 사전순 정렬
        return a.localeCompare(b);
      } else {
        // n번째 글자를 기준으로 정렬
        return a[n].localeCompare(b[n]);
      }
    });
    return result;
}