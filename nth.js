// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.

function findNthSmallest(arr, n) {
    // Sort the array in ascending order
    const sortedArray = arr.slice().sort((a, b) => a - b); // Use slice to avoid mutating the original array
    return sortedArray[n - 1]; // Return the Nth smallest element (1-based index)
}


console.log(findNthSmallest([4, 2, 7, 1, 9], 3)); 
// Expected output: 4
// Explanation: Sorted array: [1, 2, 4, 7, 9]. The 3rd smallest is 4.

console.log(findNthSmallest([-3, -1, 2, 4, 0], 2)); 
// Expected output: -1
// Explanation: Sorted array: [-3, -1, 0, 2, 4]. The 2nd smallest is -1.


console.log(findNthSmallest([5, 2, 2, 7, 3], 4)); 
// Expected output: 5
// Explanation: Sorted array: [2, 2, 3, 5, 7]. The 4th smallest is 5.
