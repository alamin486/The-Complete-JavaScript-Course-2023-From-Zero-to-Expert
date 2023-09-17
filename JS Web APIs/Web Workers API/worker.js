// This is the code that runs in the Web Worker

// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

// Listen for messages from the main thread
self.onmessage = function(event) {
    const numbers = event.data;

    // Calculate the sum of the array
    const result = calculateSum(numbers);

    // Send the result back to the main thread
    self.postMessage(result);
};
