// --------------------------------------------------
// Test for caesarCipher.js
// --------------------------------------------------

const caesarCipher = require('./caesarCipher');

// CHECKING FOR UPPER CASE TEST
// --------------------------------------------------
test('' +
    'The text encrypted by caesarCipher with a shift of 13 is' +
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG is ' +
    'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT', () => {
    expect(caesarCipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 13)).toBe('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT');
});


// CHECKING FOR PUNCTUATIONS AND LOWER AND UPPER CASE TEST
// --------------------------------------------------
test('' +
    'The text encrypted by caesarCipher with a shift of 13 is ' +
    'THE quick brown FOX JUMPS OVER THE LAZY DOG! ReAlLy CoOL! is ' +
    'GUR dhvpx oebja SBK WHZCF BIRE GUR YNML QBT! ErNyYl PbBY!', () => {
    expect(caesarCipher('THE quick brown FOX JUMPS OVER THE LAZY DOG! ReAlLy CoOL!', 13)).toBe('GUR dhvpx oebja SBK WHZCF BIRE GUR YNML QBT! ErNyYl PbBY!');
});


// SHIFT OF 3 TEST
// --------------------------------------------------
test('' +
    'The text encrypted by caesarCipher with a shift of 3 is ' +
    'THE quick brown FOX JUMPS OVER THE LAZY DOG! ReAlLy CoOL! is ' +
    'GUR dhvpx oebja SBK WHZCF BIRE GUR YNML QBT! ErNyYl PbBY!', () => {
    expect(caesarCipher('THE quick brown FOX JUMPS OVER THE LAZY DOG! ReAlLy CoOL!', 3)).toBe('WKH txlfn eurzq IRA MXPSV RYHU WKH ODCB GRJ! UhDoOb FrRO!');
});