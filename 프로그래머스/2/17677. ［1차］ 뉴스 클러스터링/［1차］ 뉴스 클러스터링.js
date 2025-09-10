function solution(str1, str2) {
    let tmp1 = [], tmp2 = [], inter = 0;
    // 임시배열 tmp1, tmp2와 교집합 개수를 카운트할 inter 변수
    
    str1 = str1.toLowerCase();	// 문자열을 소문자로 변환
    str2 = str2.toLowerCase();

	// 문자열을 2개씩 끊어 집합으로 만든 후, 영문을 제외한 문자가 섞인 집합은 덜어냄
    for(let i=1; i<str1.length; i++) 
        if(str1[i-1] >= 'a' && str1[i-1] <= 'z' && str1[i] >= 'a' && str1[i] <= 'z')
            tmp1.push(str1[i-1]+str1[i]);
            // a 에서 z 사이의 문자열로만 이루어진 두개의 문자를 합하여 임시배열에 푸시
            
    // 위와 같은 방법으로 str2도 반복
    for(let i=1; i<str2.length; i++)
        if(str2[i-1] >= 'a' && str2[i-1] <= 'z' && str2[i] >= 'a' && str2[i] <= 'z')
            tmp2.push(str2[i-1]+str2[i]);

    // 교집합의 갯수를 카운트
    for(let i=0; i<tmp1.length; i++){
        const tmp = tmp1[i];
        // 첫번째 집합요소가
      
        for(let j=0; j<tmp2.length; j++){
        // 두번째 집합에 존재하면 inter(교집합 개수)를 ++ 한 후,
        // 두번째 집합에 있던 요소를 지워주어야 다음 번 반복문때 카운트를 하지 않음
            if(tmp === tmp2[j]){
                inter ++;
                tmp2[j] = '';
                break;
            }
        } 
    }
    
    const union = tmp1.length + tmp2.length - inter;
    // 합집합의 크기 : 집합1 + 집합2 - 교집합
    
    return union === inter ? 65536 : Math.floor((inter/union) * 65536);
}