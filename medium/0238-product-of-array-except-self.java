/**
 Problem: 238. Product of Array Except Self
 2026/02/02
 https://leetcode.com/problems/insert-delete-getrandom-o1/?envType=study-plan-v2&envId=top-interview-150
 Approach: 解法ごとに個別で記載
 自力回答: 初見では解けず。
 */

 // ==== optimized Solutions ===

 // 方法1: Brute Force
 // time complexity: O(n^2)
 // ただしこの方法だと、配列の長さが長くなればなるほど時間がかかってしまう
// class Solution {
//     public int[] productExceptSelf(int[] nums) {
//         int n = nums.length;
//         int ans[] = new int[n];

//         // n回分、i == j以外のすべての配列の値を掛けた値を新しく作ったから配列ansに入れてゆく
//         for(int i = 0; i < n; i++){
//             int pro = 1;
//             for(int j = 0; j < n; j++){
//                 // except selfの部分
//                 if(i == j) continue;
//                 // 現在の値以外を全てかける
//                 pro *= nums[j];
//             }
//             ans[i] = pro;
//         }
//         return ans;
//     }
// }

// 方法2: Dividing the product of array with the number
// Time Complexity: O(n)
// 問題：配列中の値に0が含まれていた場合、本来ans[i]には0が入るはずなのに適切にその値を入れられない。
// 　　　また、該当インデックスの値が0だった場合、割り算の結果がエラーになってしまう。
// class Solution {
//     public int[] productExceptSelf(int[] nums) {
//         int n = nums.length;
//         int ans[] = new int[n];
//         int pro = 1;

//         // 一度すべての値を掛けた値を先に出しておく
//         for(int num : nums){
//             pro *= num;
//         }

//         // その次にiで回したときのnums[i]で割り、全体を掛けた値から自分を除いた値としてans[i]に入れる
//         for(int i = 0; i < n; i++){
//             ans[i] = pro / nums[i];
//         }

//         return ans;
//     }
// }

// 方法3: Finding Prefix Product and Suffix Product
// 自分より前の積に自分より後の積を掛け合わせることで、except selfを解決する
// Time Complexity: O(n)
// 問題：追加のメモリスペースを使ってしまっている
// class Solution {
//     public int[] productExceptSelf(int[] nums) {
//         int n = nums.length;
//         int pre[] = new int[n];
//         int suff[] = new int[n];
//         pre[0] = 1;
//         suff[n - 1] = 1;

//         for (int i = 1; i < n; i++) {
//             // 一つ前の結果に一つ前の値を掛けることで自分を排除
//             pre[i] = pre[i - 1] * nums[i - 1];
//         }

//         for(int i = n - 2; i >= 0; i--) {
//             // 同じように一つあとの結果に、一つあとの値を...
//             suff[i] = suff[i + 1] * nums[i + 1];
//         }

//         // i | nums[i] | pre[i] | suff[i]
//         // 0 |   A     |   1    | B*C*D   ---pre[0] → 左に何もない
//         // 1 |   B     |   A    | C*D
//         // 2 |   C     |  A*B   | D
//         // 3 |   D     |  A*B*C | 1　　　 ---suff[n - 1] → 右に何もない
//         int ans[] = new int[n];
//         for (int i = 0; i < n; i++) {
//             ans[i] = pre[i] * suff[i];
//         }

//         return ans;
//     }
// }

// 方法4: Directly store the product of prefix and suffix into the final answer array
// Time Complexity: O(n)
// Space Complexity: O(1) (出力として指定されている配列のメモリを除いて)
// ansにpreの結果をまず入れ、そのpreが入ったansにsuffをかけることで余分なメモリを使わない
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int ans[] = new int[n];
        // すべての値を1で初期化する
        Arrays.fill(ans, 1);

        int curr = 1;
        for (int i = 0; i < n; i++) {
            // 一つ前の結果を現在のインデックスに入れる
            ans[i] = curr; 
            curr *= nums[i];
        }

        curr = 1;
        for (int i = n - 1; i >= 0; i--) {
            // currに一つあとの結果を入れ、それをansと掛け合わせる
            ans[i] *= curr;
            curr *= nums[i];
        }

        return ans;
    }
}