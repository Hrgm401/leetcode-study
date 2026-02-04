/**
 Problem: 134. Gas Station
 2025/02/03
 https://leetcode.com/problems/gas-station/?envType=study-plan-v2&envId=top-interview-150
 Approach: Greery (貪欲法)
 自力回答: 間違ったケースをつぶしてみるも、根本として「どこがスタート地点としてふさわしいか」を
 最初に決めてしまおうとしたことが問題。（そもそもつぶさないとうまくいかないのなら、それは考えを変えるべき）
 以前解いた、55. Jump Gameを応用して考えることができればよかった。
 なんとなく頭に全体でcostがgasの総量に足りなければどちらにしろ駄目そうだというイメージはあったとは思うが、
 言語化ができず重要なことだとも考えられなかったように思う。
 全体的に以前解いたアルゴリズムを抽象化して考えられていないので復習が必要。
 */
//My Solution
// function canCompleteCircuit(gas: number[], cost: number[]): number {
//     let startIndex = -1;
//     let n = gas.length;
//     for(let i = 0; i < n; i++){
//         // ここの前提が間違っている
//         // 単体でガスがコストを上回るのではなく、その先の大きなコストを乗り越えられる貯金を
//         // 乗り越えられるだけのガスを持てる地点が正解になる
//         // brute forceでの正解は下記に記載
//         if(gas[i] >= cost[i] && gas[i] - cost[i] > startIndex) {
//             startIndex = i;
//         }
//     }
//     console.log(startIndex)
//     if (startIndex === -1) return -1;

//     let pre = startIndex;
//     let tank = gas[startIndex];
//     console.log(tank)
//     for(let i = startIndex + 1; i < startIndex + n; i++){
//         tank -= cost[pre];
//         pre = i % n;
//         if(tank < 0) return -1;
//         tank += gas[pre];
//     }
//     return startIndex;
// };

// {
//     const n = gas.length;
//     // 全ての駅をスタート地点の候補として順番に試す (これが O(n^2) の原因)
//     for (let start = 0; start < n; start++) {
//         // 最初の駅ですら出発できないならスキップ
//         if (gas[start] < cost[start]) continue;

//         let tank = 0;
//         let possible = true;

//         // そこから n 駅分進んでみる
//         for (let i = 0; i < n; i++) {
//             let current = (start + i) % n;
//             tank += gas[current] - cost[current];

//             // 途中でマイナスになったら、そのスタート地点は失敗
//             if (tank < 0) {
//                 possible = false;
//                 break;
//             }
//         }

//         if (possible) return start;
//     }

//     return -1;
//     }
// }

// Optimized Solution
function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    // 全体でgas - costが0未満になれば、それは一周できるガスがこの環状道路沿いにないということ
    // つまり全体で足りていれば、最後に残ったスタート位置を正しいスタート位置として見ることができる
    let totalSurplus = 0;
    let surplus = 0;
    let start = 0;

    for (let i = 0; i < n; i++) {
        totalSurplus += gas[i] - cost[i];
        surplus += gas[i] - cost[i];

        if (surplus < 0) {
            surplus = 0;
            start = i + 1;
        }
    }

    return totalSurplus < 0 ? -1 : start;
}
