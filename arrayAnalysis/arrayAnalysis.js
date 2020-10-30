// --------------------------------------------------
// Test Description
// Array Analysis. Write a function that takes an array of numbers
// and returns an object with the following properties: average, min, max, and length.
// --------------------------------------------------

function analyze(numArray) {

    let total = 0;
    let max = numArray[0];
    let min = numArray[0];

    numArray.map((num) => {
        // For Average
        total = total + num;

        // For Max number
        if (max < num) {
            max = num;
        }
    });

    numArray.map((num) => {
        // For Min number
        if (min > num) {
            min = num;
        }
    });

    const analysisObj = {};
    analysisObj.average = total/numArray.length;
    analysisObj.min = min;
    analysisObj.max = max;
    analysisObj.length = numArray.length;

    return analysisObj;
}

module.exports = analyze;