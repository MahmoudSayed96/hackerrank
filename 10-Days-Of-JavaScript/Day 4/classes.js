/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(sideLengths) {
        this.sideLengths = sideLengths;
        this.sum = 0;
    }

    perimeter() {
        this.sideLengths.forEach(side => {
            this.sum += Number(side);
        });
        return this.sum;
    }
}