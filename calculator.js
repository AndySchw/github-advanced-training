// Simple Calculator
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// TODO: Add multiply and divide functions

module.exports = { add, subtract };
