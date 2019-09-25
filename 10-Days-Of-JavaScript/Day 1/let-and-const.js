function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;

    var r,
        area,
        perimeter;

    r = parseFloat(readLine(), 3);


    area = PI * (r * r);
    perimeter = PI * 2 * r;

    // Print the area of the circle:
    console.log(area);
    // Print the perimeter of the circle:
    console.log(perimeter);
}