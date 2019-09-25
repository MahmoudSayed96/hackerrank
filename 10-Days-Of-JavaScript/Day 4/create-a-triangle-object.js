/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    const Rectangle = {
        length: 0,
        width: 0,
        perimeter: 0,
        area: 0
    }

    Rectangle.length = a;
    Rectangle.width = b;
    Rectangle.perimeter = 2 * (a + b);
    Rectangle.area = a * b;

    return Rectangle;

}