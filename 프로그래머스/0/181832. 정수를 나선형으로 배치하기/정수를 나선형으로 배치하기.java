/*
c 증가 -> r 증가 -> c 감소 -> r 감소 -> ...
*/
class Solution {
    public int[][] solution(int n) {
        int[][] dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int i = 0;
        int[][] answer = new int[n][n];
        int currNum = 1;
        int r = 0;
        int c = 0;
        
        while (currNum <= n*n) {        	
        	answer[r][c] = currNum;
            currNum++;
        	
        	int nr = r + dirs[i][0];
        	int nc = c + dirs[i][1];
        	
        	if (nr < 0 || nr >= n || nc < 0 || nc >= n || answer[nr][nc] != 0) {
        		i = (i + 1) % 4;
        		r += dirs[i][0];
        		c += dirs[i][1];
        		continue;
        	}            
        	r = nr;
        	c = nc;
        }
        
        return answer; 
    }
}