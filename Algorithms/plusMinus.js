// Complete the plusMinus function below.
function plusMinus(arr) {
    let plus = 0,
        minus = 0,
        zeros = 0,
        count = arr.length;

    arr.forEach(element => {
        if (element > 0) plus++;
        else if (element < 0) minus++;
        else zeros++;
    });

    console.log((plus / count).toFixed(6));
    console.log((minus / count).toFixed(6))
    console.log((zeros / count).toFixed(6));
    return 0;

}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));