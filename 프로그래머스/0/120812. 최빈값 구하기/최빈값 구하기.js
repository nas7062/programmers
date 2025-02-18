function solution(array) {
    let arr= new Array(1000).fill(0); 
    for (let ar of array) { // array의 값들을 배열에 넣어줌
        arr[ar]++; 
    }
    let maxi = 0; 
    let idx =0;
    for(let i =0;i<arr.length;i++) {
        if(maxi <arr[i]){ // maxi값보다 크면 maxi idx는 i 
            maxi =arr[i];
            idx =i;
        }
        if(maxi ===arr[i+1]) // maxi값이랑 같은 값이 또 존재하면 idx를 -1로
            idx=-1;
    }
    return idx;
}