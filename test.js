// Simple test file
const { add, subtract, multiply, divide } = require('./calculator');

console.log('🧪 Running tests...\n');

// Test Addition
console.log('Testing add():');
const addResult = add(5, 3);
console.log(`  add(5, 3) = ${addResult}`);
if (addResult === 8) {
    console.log('  ✅ PASS\n');
} else {
    console.log('  ❌ FAIL\n');
    process.exit(1);
}

// Test Subtraction
console.log('Testing subtract():');
const subResult = subtract(10, 4);
console.log(`  subtract(10, 4) = ${subResult}`);
if (subResult === 6) {
    console.log('  ✅ PASS\n');
} else {
    console.log('  ❌ FAIL\n');
    process.exit(1);
}

// Test Multiplication
console.log('Testing multiply():');
const mulResult = multiply(6, 7);
console.log(`  multiply(6, 7) = ${mulResult}`);
if (mulResult === 42) {
    console.log('  ✅ PASS\n');
} else {
    console.log('  ❌ FAIL\n');
    process.exit(1);
}

// Test Division
console.log('Testing divide():');
const divResult = divide(20, 4);
console.log(`  divide(20, 4) = ${divResult}`);
if (divResult === 5) {
    console.log('  ✅ PASS\n');
} else {
    console.log('  ❌ FAIL\n');
    process.exit(1);
}

console.log('✅ All tests passed!');
process.exit(0);
