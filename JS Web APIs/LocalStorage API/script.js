// Get DOM elements
const inputField = document.getElementById('inputField');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const clearButton = document.getElementById('clearButton');
const output = document.getElementById('output');

// Add event listeners
saveButton.addEventListener('click', () => {
    const data = inputField.value;
    localStorage.setItem('myData', data);
    inputField.value = '';
});

loadButton.addEventListener('click', () => {
    const data = localStorage.getItem('myData');
    if (data) {
        output.innerHTML = `Data from LocalStorage: ${data}`;
    } else {
        output.innerHTML = 'No data found in LocalStorage.';
    }
});

clearButton.addEventListener('click', () => {
    localStorage.removeItem('myData');
    output.innerHTML = 'LocalStorage data cleared.';
});
