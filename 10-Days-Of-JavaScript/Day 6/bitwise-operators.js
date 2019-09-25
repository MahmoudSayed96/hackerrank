function getMaxLessThanK(n, k) {

    let max = 0;
    let comp = -1;
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            comp = i & j;
            if (comp < k && comp > max) {
                max = comp;
            }
        }

    }
    return max;
}