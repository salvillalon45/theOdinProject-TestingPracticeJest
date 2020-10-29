// --------------------------------------------------
// Test Description
// reverseString(string) takes a string and returns it reversed.
// --------------------------------------------------

function reverseString(str) {
    let strArray = str.split('');
    let up = 0;
    let down = strArray.length - 1;

    while (up < down) {
        let temp = strArray[up];
        strArray[up] = strArray[down];
        strArray[down] = temp;

        up++;
        down--;
    }

    return strArray.join('');
}

module.exports = reverseString;
