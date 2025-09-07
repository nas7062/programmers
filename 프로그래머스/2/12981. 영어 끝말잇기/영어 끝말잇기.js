function solution(n, words) {
    let wordlist = [words[0]];

    for(let i = 1; i < words.length; i++) {
        let prev = words[i - 1];
        let curr = words[i];

        // 중복 체크
        if (wordlist.includes(curr)) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        // 앞 단어와 연결되는지 체크
        if (prev[prev.length - 1] !== curr[0]) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        wordlist.push(curr);
    }

    // 탈락자가 없을 경우
    return [0, 0];
}