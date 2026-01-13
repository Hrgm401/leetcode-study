//ハッシュ化による解法
// function majorityElement(nums: number[]): number {
//     //要素とカウント数マップ化する
//     const counts = new Map<number, number>();
//     //制約に準拠する：The majority element is the element that appears more than ⌊n / 2⌋ times.
//     //more than [n / 2]ということは、nums / 2回出てきたらそれがmajority elementということ
//     const majority = Math.ceil(nums.length / 2);

//     for(const num of nums){
//         //何回出てきたか見て更新する。初めて出てきた場合は０ + 1
//         const count = (counts.get(num) || 0) + 1;
//         counts.set(num, count);

//         //majority回出てきていたら、そのnumがmajority elementとなる
//         if(count >= majority){
//             return num;
//         }
//     }

// };

//Boyer-Mooreのロジックによる解法
function majorityElement(nums: number[]): number {
    //majority element
    let mjr;
    //制約があるため、1:3, 2:4であれば打ち消しあい、2の方がcountが高くなる
    let count = 0;
    for(const num of nums){
        //最初, 打ち消しあって超えた時0になる
        if(count === 0){
            mjr = num;
        }
        //次の値がmjr出なかったら-1される
        //打ち消しあったら0に、超えたら1に
        count += mjr !== num ? 1 : -1;
    }
    return mjr;
};
