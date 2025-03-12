function solution(phone_book) {
    var answer = true;
    phone_book.sort();
     // 하나라도 틀리면 false (some함수) 
   const result =  phone_book.some((book,idx)=> {
         return phone_book[idx+1]?.startsWith(book);
    })
    return !result; // 여기서는 하나라도 존재한다면 true로 아니면 false 
}