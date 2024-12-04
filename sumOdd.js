// Find the sum of the odd numbers within an array, after cubing the initial integers. 
// The function should return undefined if any of the values aren't numbers.

function sumOddCubedNumbers(arr) {
    // Validate input: Check if all elements are numbers
    if (!arr.every((value) => typeof value === "number")) {
        return undefined;
    }

    // Cube each number, filter odd numbers, and calculate the sum
    const result = arr
        .map((num) => num ** 3) // Cube each number
        .filter((num) => num % 2 !== 0) // Keep only odd numbers
        .reduce((sum, num) => sum + num, 0); // Sum the odd numbers

    return result;
}


// Test Cases
console.log(sumOddCubedNumbers([1, 2, 3, 4])); // Output: 28

console.log(sumOddCubedNumbers([3, 5, 7])); // Output: 495

console.log(sumOddCubedNumbers([1, "a", 3])); // Output: undefined

console.log(sumOddCubedNumbers([2, 4, 6])); // Output: 0

console.log(sumOddCubedNumbers([10, -3, 7])); // Output: 316
