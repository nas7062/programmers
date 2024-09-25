function solution(food) {
    var answer = '';
    let foodarr =food.map((item)=>Math.floor(item/2));
    
     foodarr.map((item,idx)=>answer+=String(idx).repeat(item));
    var last =answer.split("").reverse().join("");
    return answer+"0"+last;
}