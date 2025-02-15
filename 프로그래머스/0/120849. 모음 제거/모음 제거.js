function solution(my_string) {
    let moum = ['a', 'e', 'i', 'o', 'u'];
    for (let m of moum) {
        my_string = my_string.replaceAll(m, ""); 
    }
    return my_string;
}