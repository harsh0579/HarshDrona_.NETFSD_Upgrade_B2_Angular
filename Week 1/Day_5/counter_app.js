// Global variable
var counter = 0;

// Function to increment counter
function incrementCounter(step) {
    counter = counter + step;
    console.log("Counter Value:", counter);
}

// Function to reset counter
function resetCounter() {
    counter = 0;
    console.log("Counter Reset. Value:", counter);
}

// Initial value
console.log("Initial Counter Value:", counter);