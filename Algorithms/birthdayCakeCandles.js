// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {

    let candles = new Map();

    ar.forEach(elm => {
        if (candles.has(elm)) {
            let val = candles.get(elm) + 1;
            candles.set(elm, val);
        } else {
            candles.set(elm, 1);
        }
    });

    let max = 0;

    for (let key of candles.keys()) {
        if (candles.get(key) > max) {
            max = candles.get(key);
        }
    }

    return max;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));