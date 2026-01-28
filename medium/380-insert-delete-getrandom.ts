/**
 Problem: 380. Insert Delete GetRandom O(1)
 https://leetcode.com/problems/insert-delete-getrandom-o1/?envType=study-plan-v2&envId=top-interview-150
 Approach: getRandomをO(1)で行うため、配列を作成する必要あり。この際SetよりMApの方が適している。
 Note:
 自力回答：ハッシュ化すればいいと思いSetを使用。ただし.randomの使いかたを忘れ断念。また普段Reactで開発を行っているため、
 TypeScriptでのクラスの書き方が分かっていない。
 */

// My Solution
// class RandomizedSet {
//     const array: Set<number>;
//     constructor() {
//         array = new Set<number>;
//     }

//     insert(val: number): boolean {
//         if (array.has(val)) {
//             return false;
//         }
//         array.add(val);
//         return true;
//     }

//     remove(val: number): boolean {
//         if (array.has(val)) {
//             array.delete(val);
//             return true;
//         }
//         return false;
//     }

//     getRandom(): number {
//         //ランダムな値を取り出す方法が分からない...
//     }
// }

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

//Optimized Solution
class RandomizedSet {
    //メソッドの外側で宣言
    private map: Map<number, number>;
    // getRandomをO(1)で取得するため、arrayが必要
    private array: number[];

    constructor() {
        this.map = new Map();
        this.array = [];
    }

    insert(val: number): boolean {
        if (this.map.has(val)) return false;
        // arrayの現在の長さを値にする
        this.map.set(val, this.array.length);
        this.array.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) return false;
        // 消す場所のインデックスを取得
        const index = this.map.get(val)!;
        // arrayの最後の値を取得
        const last = this.array[this.array.length - 1];
        // arrayの消したい値に最後の値を入れる
        this.array[index] = last;
        // mapも更新
        this.map.set(last, index);
        // 最後の値は不要なので消す
        this.array.pop();
        // mapからも削除
        this.map.delete(val);
        return true;
    }

    getRandom(val: number): number {
        // arrayのlengthからランダムなインデクスを取得
        const randomIndex = Math.floor(Math.random() * this.array.length);
        return this.array[randomIndex];
    }
}
