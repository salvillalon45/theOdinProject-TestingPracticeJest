// --------------------------------------------------
// Test Description
// A calculator object that contains the basic operations:
// add, subtract, divide, and multiply.
// --------------------------------------------------

const calculatorFactory = function() {
    function add(num1, num2) {
        return num1 + num2
    }
    
    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return Math.trunc(num1 / num2);
    }

    return {
        add,
        subtract,
        multiply,
        divide
    }
}

module.exports = calculatorFactory;
