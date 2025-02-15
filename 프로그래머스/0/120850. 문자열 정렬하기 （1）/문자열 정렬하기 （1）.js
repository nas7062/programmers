function solution(my_string) {
  
    return [...my_string].map((item)=>!isNaN(item) ? Number(item) : null)
            .filter((item)=>item !==null).sort((a,b)=>a-b);
}