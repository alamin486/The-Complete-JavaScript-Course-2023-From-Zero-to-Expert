// Create a Web Worker from an external JavaScript file
const worker = new Worker('worker.js');

// Get DOM elements
const calculateButton = document.getElementById('calculateButton');
const resultElement = document.getElementById('result');

// Listen for messages from the worker
worker.onmessage = function(event) {
    resultElement.textContent = `Sum: ${event.data}`;
};

// Handle the "Calculate Sum" button click
calculateButton.addEventListener('click', function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Send the array of numbers to the worker
    worker.postMessage(numbers);
});
