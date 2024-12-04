// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


function sortStringsByLength(arr) {
    // Use the sort method with a custom comparator for string length
    return arr.sort((a, b) => a.length - b.length);
}




// Test Cases
console.log(sortStringsByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])); 
// Output: ["Eyes", "Glasses", "Monocles", "Telescopes"]

console.log(sortStringsByLength(["Cat", "Lion", "Elephant", "Dog"])); 
// Output: ["Cat", "Dog", "Lion", "Elephant"]

console.log(sortStringsByLength(["A", "AB", "ABC", "ABCD"])); 
// Output: ["A", "AB", "ABC", "ABCD"]

console.log(sortStringsByLength(["Banana", "Apple", "Cherry", "Blueberry"])); 
// Output: ["Apple", "Banana", "Cherry", "Blueberry"]

console.log(sortStringsByLength(["", "Short", "Longer", "Longest"])); 
// Output: ["", "Short", "Longer", "Longest"]
