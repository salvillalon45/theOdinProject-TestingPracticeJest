// --------------------------------------------------
// Test for capitalize.js
// --------------------------------------------------

const capitalize = require('./capitalize');

test('capitalize hola to be Hola', () => {
    expect(capitalize('hola')).toBe('Hola');
});