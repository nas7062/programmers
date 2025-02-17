function solution(before, after) {
    let sortedBefore = [...before].sort().join('');
    let sortedAfter = [...after].sort().join('');
    return sortedBefore === sortedAfter ? 1 :0;
}