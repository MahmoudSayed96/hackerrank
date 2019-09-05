/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let df = 0;
    let leftToRightDig = 0;
    let rightToLeftDig = 0;

    // right to left
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        rightToLeftDig += arr[i][j];
    }

    // left to right
    for (let i = 0, j = 0; i < arr.length; i++, j++) {
        leftToRightDig += arr[i][j];
    }

    df = rightToLeftDig - leftToRightDig;
    return Math.abs(df);

}

let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
console.log(diagonalDifference(arr));