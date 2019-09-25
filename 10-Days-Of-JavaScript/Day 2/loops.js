/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let temp = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            console.log(s[i]);
        } else {
            temp += s[i];
        }
    }

    for (let j = 0; j < temp.length; j++) {
        console.log(temp[j]);
    }
}