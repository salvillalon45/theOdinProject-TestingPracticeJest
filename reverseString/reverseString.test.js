// --------------------------------------------------
// Test for capitalize.js
// --------------------------------------------------

const reverseString = require('./reverseString');

test('reverse the string hola to be aloh', () => {
    expect(reverseString('hola')).toBe('aloh');
});
