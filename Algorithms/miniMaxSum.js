// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    let temp;
    let minSum = 0;
    let maxSum = 0;

    // Sorting array
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                // Swap
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for (let max = 1, min = arr.length - 2; max < arr.length; max++, min--) {
        minSum += arr[min];
        maxSum += arr[max];
    }

    return [minSum, maxSum];
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));