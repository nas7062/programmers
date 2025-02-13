class Solution {
    public int solution(int[] num_list) {
        int sum =0;
        int gop =1;
        for(int i =0;i<num_list.length;i++) {
        	sum+=num_list[i];
        	gop*=num_list[i];
        }
        return Math.pow(sum, 2) >gop ? 1 : 0;
    }
}