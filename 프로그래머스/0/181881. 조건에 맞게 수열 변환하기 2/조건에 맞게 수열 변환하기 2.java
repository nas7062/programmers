import java.util.Arrays;

class Solution {
    public int solution(int[] arr) {
        int answer = 0;
        int[] narr = Arrays.copyOf(arr, arr.length); // 배열 복사 (이전배열)

        while (true) {
            int[] changearr = new int[narr.length]; // 현재 배열
            for (int i = 0; i < narr.length; i++) {
                if (narr[i] >= 50 && narr[i] % 2 == 0) {
                    changearr[i] = narr[i] / 2;
                } else if (narr[i] < 50 && narr[i] % 2 == 1) {
                    changearr[i] = narr[i] * 2 + 1;
                } else {
                    changearr[i] = narr[i];
                }
            }
            // 모든 요소가 동일한지 확인
            boolean isAllSame = true; 
            for (int i = 0; i < narr.length; i++) {
                if (narr[i] != changearr[i]) { // 이전 배열과 현재배열을 전체 비교
                    isAllSame = false; 
                    break; // 다른게 있다면 for문 종료
                }
            }
            if (isAllSame) {  // 이전배열과 지금 배열이 모두 같다면 종료
                break;
            }
            answer++; 
            narr = changearr; 
        }

        return answer;
    }
}
