/*
 * Problem: 88 Merge Sorted Aray
 * Approach: Two Pointers
 * Note: 初見で解けず。
 */

// My Solution
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     if (m === 0){
//         nums1 = nums2;
//     } else if (n !== 0){
//         let temp = 0;
//         for(var i = 0; i < m; i++){
//             if(nums2.length > 0) {
//                 if (nums1[i + temp] > nums2[0]) {
//                     nums1.splice(i + temp, 0, nums2[0]);
//                     temp++;
//                     nums1.pop(); //forgot : unshift(), pop(), shift(), concat(), splice()
//                     nums2.shift();
//                 }
//             }
//         }
//         if(nums2.length > 0){
//             nums1.splice(m + n - nums2.length, nums2.length);
//             const finNums = nums1.concat(nums2);
//             nums1 = finNums;
//         }
//     }
// };

// Optimized Solution (Learned)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    //ここでポインターを打つ
    //nums1はインデックスm - 1以降はn > 0なら0ということが分かっている
    let i = m - 1;
    let j = n - 1;
    //ここで現在更新をしている値も定義しておく
    let k = m + n - 1;

    //比較：大きいほうを後ろからnums1に入れてゆく
    //i || jが<=0になったらループ終了
    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            j--;
            k--;
        } else {
            nums1[k] = nums1[i];
            i--;
            k--;
        }
    }

    //jがまだある場合、nums2の値がまだすべては入っていないので、残りを入れる
    //iがまだあり、jが0の場合は、必要な場所にjが入り切り、小さいiはそこに残ったままなのでiの計算はする必要がない
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}
