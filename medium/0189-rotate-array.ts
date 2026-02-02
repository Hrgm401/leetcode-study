/**
 Problem: Rotate Array
 2026/1/13
 Note:
 自力回答はTime ComplexityO(N*k)となり遅い
 Reverse法を学習: O(N)
 */

// My Solution
// Time Complexity: O(N * k) - unshift is O(N)
// Space Complexity: O(1)
// function rotate(nums: number[], k: number): void {
//     while(k > 0){
//         //末尾から値取得 → 先頭に追加
//         let index = nums.pop();
//         nums.unshift(index);
//         k--;
//     }
// };

// Optimized Solution (Learned)
// Time Complexity: O(n)
// Space Complexity: O(1)
function rotate(nums: number[], k: number): void {
    const len = nums.length;
    //k > nums.lengthだった場合、二週回るのはO(n)でないため、
    //余りをkとする処理を入れる
    k %= len;

    //まず全体を反転させる
    //[1,2,3,4,5,6,7] → [7,6,5,4,3,2,1]
    reverseArr(nums, 0, len - 1);

    //0からk -1までを反転させる
    //[7,6,5,4,3,2,1] → [5,6,7,4,3,2,1]
    reverseArr(nums, 0, k - 1);

    //残りを反転させる
    //[5,6,7,4,3,2,1] → [5,6,7,1,2,3,4]
    reverseArr(nums, k, len - 1);
}

//ヘルパー関数
function reverseArr(nums: number[], start: number, end: number) {
    //startとendを入れ替えて反転する
    //start > endになったり、start === endになるとループが終了するので
    //真ん中に着たらそれ以上反転しない
    while (end > start) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        //下記の書き方も可能
        //[nums[start], nums[end]] = [nums[end], nums[start]];

        start++;
        end--;
    }
}
