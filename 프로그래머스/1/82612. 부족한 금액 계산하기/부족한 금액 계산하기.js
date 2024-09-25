function solution(price, money, count) {
    var answer = -1;
    var total =0;
    for(let i =1;i<=count;i++)
        {
            total+=price*i;
        }
    return total-money >0 ? total-money :0;
}