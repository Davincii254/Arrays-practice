// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.


function convertStringsToNumbers(arr) {
    // Validate input: Ensure all elements can be parsed into numbers
    if (!arr.every((str) => !isNaN(parseFloat(str)))) {
        return undefined; // Return undefined if invalid input is found
    }

    // Convert strings to numbers
    return arr.map((str) => parseFloat(str));
}

// Test Cases
console.log(convertStringsToNumbers(["1", "2", "3"])); // Output: [1, 2, 3]

console.log(convertStringsToNumbers(["1.5", "2.8", "3.0"])); // Output: [1.5, 2.8, 3]

console.log(convertStringsToNumbers(["0", "-10", "3.14"])); // Output: [0, -10, 3.14]

console.log(convertStringsToNumbers(["1", "2", "three"])); // Output: undefined

console.log(convertStringsToNumbers([])); // Output: []
