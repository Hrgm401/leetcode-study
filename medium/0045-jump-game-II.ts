/**
 Problem: 45. Jump Game II
 https://leetcode.com/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150
 Approach: greedy（貪欲法）
 最大で進める範囲の中で、一番遠くへ飛べるものに乗り換える方法を本来は求めるべき。
 Note:
 自力回答はケースによってはうまくいかない。（[4,1,3,3,1,1,1]など）
 本来はもっと後の地点でカウントすべきなのに残っている値と比べて大きければカウントしてしまう。
 まだ限界でない時に、今の値より次に行けばもっと遠くへ飛べるかもしれない。
 */

//My Solution
// function jump(nums: number[]): number {
//     let count = 0;
//     let left = 0;
//     const n = nums.length
//     for (let i = 0; i < n; i++){
//         //切り替わるタイミングでcount++する
//         left--;
//         const current = Math.max(left, nums[i]);
//         if(current > left){
//             left = current;
//             count++;
//         }
//         //nums[n - 1]に必ずたどり着くことが保証されているので、
//         //到着すればそれがOutput
//         if(i + left === n - 1){
//             return count;
//         }
//     }
//     return count;
// };

// Optimized solution
// Time Complexity: O(n)
// Space Complexity: O(1)
function jump(nums: number[]): number {
    // 最大距離を求める
    let maxDistance = 0;
    let curPos = 0;
    let jumpCount = 0;
    
    // 最後は除く：それ以上進まない為
    for (let i = 0; i < nums.length - 1; i++){
        // 今進んだ距離 + num[i] が現在最大距離として保存されている
        // 値より大きくなるか比べる
        maxDistance = Math.max(maxDistance, i + nums[i]);
        // 実際にジャンプできたら始めてそこをカウントする。
        if(i === curPos){
            jumpCount++;
            // 最大進んだ中で見つけた1番遠くまで進める距離を
            // 次の現在ポジションにとして保存する
            curPos = maxDistance;
        }
    }
    return jumpCount;
};