function solution(sides) {
    let sorted = sides.sort((a,b)=>a-b);
    return sorted[2] < sorted[0]+sorted[1] ? 1 :2;
}