/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function

    let max1 = nums[0];
    let temp;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] <= nums[j]) {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    for (let k = 0; k <= nums.length; k++) {
        if (nums[k + 1] < nums[k]) {
            return nums[k + 1];
        }
    }
}