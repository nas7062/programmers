import java.util.Arrays;

class Solution {
    public int solution(int[] mats, String[][] park) {
        Arrays.sort(mats); // mats 정렬
        
        int rows = park.length; // 공원의 행
        int cols = park[0].length; // 공원의 열
        
        // 큰 돗자리부터 탐색
        for(int i = mats.length - 1; i >= 0; i--) {
            
            // mat가 넘어가지 않도록 
            for(int r = 0; r <= rows - mats[i]; r++) {
                for(int c = 0; c <= cols - mats[i]; c++) {
                    if(isValid(park, r, c, mats[i])) {
                        return mats[i];
                    }
                }
            }
        }
        
        return -1;
    }
    
    private boolean isValid(String[][] park, int start_y, int start_x, int mat_size) {
        // mat 크기만큼 탐색
        for(int i = start_y; i < start_y + mat_size; i++) { 
            for(int j = start_x; j < start_x + mat_size; j++) {
                if(!park[i][j].equals("-1")) {
                    return false;
                }
            }
        }
        return true;
    }
}