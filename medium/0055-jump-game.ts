/**
 Problem: 55. Jump Game
 https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150
 Approach: 最大で進める値がnumsに入っている。つまり、そこまで強制で進むわけではない。
 進んでゆき、推進力がなくなりそうで、今の推進力より多い値が入っていれば交換する。
 交換を繰り返し、0にならずにlast indexまで行ければtrue。
 Note:
 自力回答は問題の読み間違えがあった(maximum jump length)
 */

// My Solution
// function canJump(nums: number[]): boolean {
//     // 今いるポジション
//     let position = 0;
//     // nums.lengthを超えた時点で終了とする
//     while(position < nums.length - 1){
//         // 0の場合はループを抜けられなくなるため、ここでreturn falseとする
//         if(nums[position] === 0){
//             return false;
//         }
//         // 今のポジションにジャンプ先の値を追加
//         position += nums[position];
//     }
//     // last indexであればtrue, それ以外はfalse
//     if(position === nums.length -1){
//         return true;
//     }
//     return false;
// };

//Optimized Solution (Learned)
//sums[i]が3であれば1 ~ 3のどれを選んでジャンプしてもよい
// 問題は単純にたどり着けるか否かを聞いているので、
// maximum jump lengthの中で前に進めてlast indexにたどり着ければよいということ
function canJump(nums: number[]): boolean {
    let left = nums[0];//余り
    for(let i = 1; i < nums.length; i++){
        // まだループを抜けていないのにleft（余っている推進力）が0になったら、
        // もう最後までたどり着けないということ
        if(left === 0){
            return false;
        }
        //推進力を一つ減らした値と今のnumを比べて多く進めるほうを選ぶ（継ぎ足しのようなイメージ）
        left = Math.max(left - 1, nums[i]);
    }
    return true;
}