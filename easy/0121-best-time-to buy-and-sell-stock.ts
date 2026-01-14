/**
 Problem: 121. Best Time to Buy and Sell Stock
 Approach: One Pass (一回走査)
 Note:
 自力回答はO(n2)になってしまう可能性あり。またコードも間違っている。
 */

// My Solution: Time Limit Exceeded
// 半分ずつ探し、その幅を縮めてゆきたかった
// 今のままでは[10, 11, 1, 2]などのケースで無限にループしてしまう
// つまりここで二分探索的な方法は使えない
// function maxProfit(prices: number[]): number {
//     let buy = 0;
//     let sell = prices.length - 1;
//     let center = Math.ceil(prices.length - 1);
//     //二分探索のようにやればO(n)で探せるのでは
//     while (sell - buy > 1){
//         for(let i = buy; i <= center; i++){
//             if(prices[buy] > prices[i]){
//                 buy = i;
//             }
//         }
//         for(let k = sell; k >= center; k--){
//             if(prices[sell] < prices[k]){
//                 sell = k
//             }
//         }
//         center = Math.ceil((sell + buy) / 2);
//     }
//     return prices[sell] - prices[buy];
// };

//Optimized Solution (Learned)
function maxProfit(prices: number[]): number {
    //最安値を取得してゆく、最大値はminPriceの後にくる値を順々に比較してゆけばいいので
    //ここで取得する意味はない
    let minPrice = Number.MAX_VALUE;
    //最大値を更新する
    let maxProfit = 0;

    for(let price of prices){
        //最安値を更新：minPriceにあらかじめNumber.MAX_VALUEを入れているので
        //最初から比較できる
        if(price < minPrice){
            minPrice = price;
        }
        //最安値でなかった場合は利益がmaxprofitより多ければmaxprofitを更新
        else if (price - minPrice > maxProfit){
            maxProfit = price - minPrice;
        }
    }
    //もし[7,3,2,6,1]などでも、minPriceは1になるがmaxProfitは更新されない
    return maxProfit;
}
