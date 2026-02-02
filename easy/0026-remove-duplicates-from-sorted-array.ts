/*
 * Problem: 26 Remove Duplicates from Sorted Array
 * Approach: Two Pointers
 * Note: 初見で解けず。
 * [学び]
 * - 配列を新たに作るのではなく、indexポインタを使ってin-placeで書き換える必要がある。
 * - 返り値は配列ではなく、新しい長さを返す点に注意。
 */

//My Solution
// function removeDuplicates(nums: number[]): number {
//     for(let i = 1; i < nums.length; i++){
//         if(nums[i-1] === nums[i]){
//             nums[i-1] = nums[i];//この後どうすれば良いかわからず時間終了(15分)ポインターの概念がなかった
//         }
//     }
// };

//Optimized Solution (Learned)
//Time Complexity: O(n)
//Space Complexity: O(1)
//注意：numberを返す。number[]は返さない
function removeDuplicates1(nums: number[]): number {
    //最初のindex = 0の値は含めるかつ比較対象がないのでindexの初期値は0
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        //一つ前の値と比較する
        if (nums[i] !== nums[i - 1]) {
            //ポインターを打ち、順々に重複がないようにする
            //前の値と比べることで、1, 1: index, 1, 2などと続いていても2が来るまでループはすり抜け、
            //2になったらnums[index]にnums[i]: 現在の値を代入し、indexを次に進める
            nums[index] = nums[i];
            index++;
        }
    }
    //indexを返すことで、評価式のexceptedNumsのlengthに合致する。k - 1以降は無視されるため、[1,2,2]などとなっていても大丈夫
    return index;
}
