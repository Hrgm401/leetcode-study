/**
 Problem: 123. Best Time to Buy and Sell Stock III
 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/?envType=study-plan-v2&envId=top-interview-150
 Approach: Dynamic Programming, DP: 動的計画法
 Note:
 自力回答だが、別のケースでは最適解を逃すリスクがある（アプローチ詳細は下記に記述）
*/

// My Solution 
// if else の多用でコードが見にくい。
// Time Complexity: O(n)
// Space Complexity: O(1)
// function maxProfit(prices: number[]): number {
//     let firstProfit = 0;
//     let secondProfit = 0;
//     let minPrice = prices[0];

//     for(let price of prices){
//         if (minPrice > price){
//             minPrice = price;
//         // secondProfit === 0かつにしているので、もしfirstProfitは少ないままで、
//         // + secondProfitにしたほうが最大利益が多くなる場合があれば対応できないのが抜けていた。
//         // 例：[2,1,4,5,2,9,7]など。
//         } else if (secondProfit === 0 && firstProfit < price - minPrice){
//             firstProfit = price - minPrice;
//         } else if (firstProfit + price - minPrice > price - minPrice){
//             secondProfit = price - minPrice;
//             minPrice = price;
//         } else if (secondProfit < price - minPrice){
//             secondProfit = price - minPrice;
//         } 
//     }
//     return firstProfit + secondProfit;
// };

//Optimized Solution (Learned)
function maxProfit(prices: number[]): number {
    let buy1 = -prices[0];
    let sell1 = 0;
    let buy2 = -prices[0];
    let sell2 = 0;

    for(let i = 1; i < prices.length; i++){
        let price = prices[i];

        //ループ毎に、今一番利益が得する方法を考える
        //-price としておけばMath.maxで大きいほうが必然的に一番小さい値となる
        buy1 = Math.max(buy1, -price); 
        sell1 = Math.max(sell1, buy1 + price); // 一回目の利益
        buy2 = Math.max(buy2, sell1 -price); // 今の値から2回目の購入を引いた分 = 手元の利益の最大化
        sell2 = Math.max(sell2, buy2 + price); // 手元の利益と二回目の売りで出た利益の最大化
    }
    return sell2;
}