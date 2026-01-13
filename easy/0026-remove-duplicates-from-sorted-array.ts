// function removeDuplicates(nums: number[]): number {
//     for(let i = 1; i < nums.length; i++){
//         if(nums[i-1] === nums[i]){
//             nums[i-1] = nums[i];
//         }
//     }
// };

//注意：numberを返す。number[]は返さない
function removeDuplicates(nums: number[]): number {
    //最初のindex = 0の値は含めるかつ比較対象がないのでindexの初期値は0
    let index = 1;
    for (let i = 1; i < nums.length; i++){
        //一つ前の値と比較する
        if(nums[i] !== nums[i - 1]){
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