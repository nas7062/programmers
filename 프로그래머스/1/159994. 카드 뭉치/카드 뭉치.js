function checkCards (cards, goal) {
    const cardsFilteredByGoal = goal.filter((item, index) => cards.includes(item));
    // cards에 있는 것들만 뽑아냄 
    const cardFilteredByIndex = cardsFilteredByGoal.filter((item, index) => item === cards[index]);
    // cards의 순서와 cardFilteredByIndex가 같은지 확인
    if(cardFilteredByIndex.length !== cardsFilteredByGoal.length){
        return false;
    } // 길이가 다르면 false 같으면 true
    
    return true;
}

function solution(cards1, cards2, goal) {    
    if(checkCards(cards1, goal) && checkCards(cards2, goal)){
        return "Yes";
    }
    
    return "No";
}