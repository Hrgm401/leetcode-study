/*
 * Problem: 27 Remove Element
 * Approach: Two Pointers
 * Note: 初見で解けず。
 * [学び]
 * - その値を削除し、その後どうずらすかが分からなかったが、前から値を入れてゆき、位置ポインターを操作してゆくだけでよかった
 */


// My Solution
// function removeElement(nums: number[], val: number): number {
//     let pointer = nums.length;
//     for(let i = 0; i < nums.length; i++){
//         if (nums[i] === val){
//             nums[i] = nums[pointer];
//             nums[pointer] = null;
//             pointer--;
//         }
//     }
//     return pointer;
// };

// Optimized Solution (learned)
// Time Complexity: O(n)
// Space Complexity: O(1)
function removeElement(nums: number[], val: number): number {
	// 値を入れてゆく場所のポインターを設定する
    let j = 0;
    for(let n of nums){
		// !== valでない時、ポインターの場所にnを入れ、j++する
        if(n !== val){
            nums[j++] = n;
        }
    }
    return j;
}