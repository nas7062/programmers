function solution(price, money, count) {
    let sum =0;
    let newPrice=0;
    for(let i =1;i<=count;i++) {
        newPrice+=price;
        sum+= newPrice;
    }
    return money>sum ? 0 : sum-money;
}