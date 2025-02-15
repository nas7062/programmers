function solution(my_string) {
    var answer = '';
    return [...my_string].map((item)=>item === item.toUpperCase() 
            ? item.toLowerCase() :item.toUpperCase()).join('');
}