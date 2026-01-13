// function removeElement(nums: number[], val: number): number {
//     let pointer = nums.length;
//     for(let i = 0; i < nums.length; i++){
//         if (nums[i] === val){
//             nums[i] = nums[pointer];
//             nums[pointer] = null;
//             pointer--;
//         }
//     }
//     return pointer;
// };

function removeElement(nums: number[], val: number): number {
    let j = 0;
    for(let n of nums){
        if(n !== val){
            nums[j++] = n;
        }
    }
    return j;
}