/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let s1, s2;
    let A = expressions[0];
    let P = expressions[1];

    s1 = (P + (Math.sqrt((P * P) - 16 * A))) / 4;
    s2 = (P - (Math.sqrt((P * P) - 16 * A))) / 4;


    let arr = [s1, s2];
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    return arr;
}