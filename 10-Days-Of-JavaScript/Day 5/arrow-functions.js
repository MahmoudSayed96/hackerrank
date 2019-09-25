/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            arr[i] = nums[i] * 2;
        } else if (nums[i] % 2 != 0) {
            arr[i] = nums[i] * 3;
        }
    }

    return arr;
}