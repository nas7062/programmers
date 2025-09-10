function solution(topping) {
    let answer = 0;
    const toppingMap = new Map(); // 토핑 종류 저장
    const brotherSet = new Set(); // 동생 토핑 개수 

    // 토핑 개수 세팅 
    for (let t of topping) {
        if (toppingMap.has(t)) {
            toppingMap.set(t, toppingMap.get(t) + 1);
        } else {
            toppingMap.set(t, 1);
        }
    }
    

    for (let i = topping.length - 1; i >= 0; i--) {
        const tp = topping[i];
        const getTp = toppingMap.get(tp); // 해당 토핑 가져옴 

        brotherSet.add(tp); // 동생에 추가 
        if (getTp === 1) { // 1이면 삭제
            toppingMap.delete(tp);
        } else { // 아니면 -1 
            toppingMap.set(tp, getTp - 1);
        }
        // 같을경우 + 
        if (brotherSet.size === toppingMap.size) { answer++; }
        // 더 커지면 멈춤 
        else if (brotherSet.size > toppingMap.size) { break; }
    }

    return answer;
}
