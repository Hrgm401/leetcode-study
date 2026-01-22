/**
 Problem: 274. H-Index
 https://leetcode.com/problems/h-index/?envType=study-plan-v2&envId=top-interview-150
 Approach: 「ソートして形を整えてから考える」 か 「分布表（カウント配列）を作ってから考える」 かのどちらかに思考をシフトすべきだった。
 Note:
 自力回答は、動的に変化するターゲットとカウントを同時にO(n)で処理しようとしたことが問題。
 わからないときは視覚化するのも手。 
 */

// My Solution
// time complexity O(n)の中で、citations.lengthを超えない範囲の中で最大の値が出てきたらそれをcitedにいれ、
// curがcitedと同じか大きければcountを増やすことができれば結果的にカウント数かcitedが答えになるのではないかと考えた。
// [3,0,6,1,5,3]
// 3,3,3,3,3,3
// 1,1,2,2,3,3
// のイメージ。
// しかし、他のパターン（[1,2,3,3,1]や[1,2,0,0,0])などを考えた時に調整がうまくいかずこねくり回した挙句頓挫。
// function hIndex(citations: number[]): number {
//     let published = citations.length;
//     let cited = citations[1];
//     let count = 0;
//     for(let i = 1; i < citations.length; i++){
//         const cur = citations[i];
//         if(cited <= cited + published){
//             cited = Math.max(cited, cur)
//         }
//         else if(cur < published){
//             cited = cur;
//         }
//         if(cited <= cur){
//             count++;
//         }
//         published--;
//     }
//     return cited < count ? cited : count;
// };

//Optimized solution
function hIndex(citations: number[]): number {
    const n: number = citations.length;
    // 昇順にソートすれば現在の引用数よりあとはさらに引用されていると見分けることができる
    citations.sort((a, b) => a - b);
    for (let i = 0; i < n; i++){
        // n - i回以上引用された論文が、少なくともn - i本存在する
        if(citations[i] >= n - i){
            return n - i;
        }
    }
    return 0;
}