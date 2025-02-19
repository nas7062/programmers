class Solution {
    public int solution(int[] wallet, int[] bill) {
        int answer = 0;
        int wallet_min = Math.min(wallet[0], wallet[1]);
        int wallet_max = Math.max(wallet[0], wallet[1]);
        int bill_min = Math.min(bill[0], bill[1]);
        int bill_max = Math.max(bill[0], bill[1]);
        
        while(true) {
            if(bill_min > wallet_min || bill_max > wallet_max) {
                bill_max /= 2;
                answer++;
            }
            
            if(bill_min > bill_max) {
                int tmp = bill_min;
                bill_min = bill_max;
                bill_max = tmp;
            }
            
            if(bill_min <= wallet_min && bill_max <= wallet_max) {
                break;
            }
        }
        return answer;
    }
}