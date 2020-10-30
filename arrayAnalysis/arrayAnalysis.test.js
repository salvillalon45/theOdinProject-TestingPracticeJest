// --------------------------------------------------
// Test for arrayAnalysis.js
// --------------------------------------------------

const analyze = require('./arrayAnalysis');

test('analyze [1,8,3,4,2,6] to be an object of {\n' +
    '  average: 4,\n' +
    '  min: 1,\n' +
    '  max: 8,\n' +
    '  length: 6\n' +
    '};', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

