/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {

    let gradeDiff = 0;
    let newGrades = [];

    grades.forEach(grade => {
        if (grade < 38) {
            newGrades.push(grade);
        } else {
            gradeDiff = Math.abs((grade % 5) - 5);
            if (gradeDiff < 3) {
                newGrades.push(grade + gradeDiff);
            } else {
                newGrades.push(grade);
            }
        }
    });

    return newGrades;

}

console.log(gradingStudents([73, 67, 38, 33]));