// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {

    let sum = 0;

    ar.forEach(element => {
        sum += element;
    });

    return sum;
}