function removeDuplicates(nums: number[]): number {
    let count = 1;
    let pointer = 1;
    for (let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[i - 1]){
            nums[pointer] = nums[i];
            count = 1;
            pointer++;
        } else if (count <= 2){
            nums[pointer] = nums[i];
            count++;
            pointer++;
        }
        count++;
        //こういう書き方もあり
        // else{
        //     count++;
        //     if(count <= 2){
        //         //計算は、[]の中にも書ける
        //         nums[pointer++] = nums[i];
        //     }
        // }
    }
    return pointer;
};