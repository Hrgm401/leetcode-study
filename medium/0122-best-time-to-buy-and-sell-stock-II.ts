/**
 Problem: 122. Best Time to Buy and Sell Stock II
 2026/1/15
 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150
 Approach: Greedyというらしい（その時点で最も最善（効率的、または利益が大きい）と思われる選択を繰り返す）
 Note:
 自力回答（アプローチ詳細は下記に記述）
 */

//My Solution
//いくつかパターンを紙に書き、どうすれば利益を最大にできそうか考えたときに
//一旦0番目をbuyに保持しておき、i番目のpricesがbuyを下回ればbuyを入れ替え、
//buyを超えれば利益に入れればこの問題の最大利益をとれるのではないかと考えた。
//[1,2,3,4,5]が5 - 1と、(2 -1) + (3 - 2)...の答えが同じならこの考え方でできると想定。
function maxProfit2(prices: number[]): number {
    let buy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
        }
        if (buy < prices[i]) {
            // else{にすればよかった
            profit += prices[i] - buy;
            buy = prices[i];
        }
    }
    return profit;
}

//別解：Solutionsの回答は一つ前と比べていたが、シグマで書けると分かったため一つ後と比べてみる
// function maxProfit(prices: number[]): number {
//     let profit = 0;
//     //一つあとと比べるので、.length - 1にしないと式がおかしくなる
//     for(let i = 0; i < prices.length - 1; i++){
//         if(prices[i + 1] > prices[i]){
//             profit += prices[i + 1] - prices[i];
//         }
//     }
//     return profit;
// }
