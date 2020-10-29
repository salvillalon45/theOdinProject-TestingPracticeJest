// --------------------------------------------------
// Test for calculator.js
// --------------------------------------------------

const calculatorFactory = require('./calculator');
const calculator = calculatorFactory();

// ADD TEST
// --------------------------------------------------
test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1,2)).toBe(3);
});


// SUBTRACT TEST
// --------------------------------------------------
test('subtract 23 - 1 to equal 22', () => {
    expect(calculator.subtract(23,1)).toBe(22);
});

test('subtract 23 - 100 to equal -77', () => {
    expect(calculator.subtract(23,100)).toBe(-77);
});


// MULTIPLY TEST
// --------------------------------------------------
test('multiply 23 * 2 to equal 46', () => {
    expect(calculator.multiply(23,2)).toBe(46);
});

test('multiply 23 * -3 to equal -69', () => {
    expect(calculator.multiply(23,-3)).toBe(-69);
});


// DIVIDE TEST
// --------------------------------------------------
test('divide 4 / 2 to equal 2', () => {
    expect(calculator.divide(4,2)).toBe(2);
});

test('divide 4 / 3 to equal 1', () => {
    expect(calculator.divide(4,3)).toBe(1);
});