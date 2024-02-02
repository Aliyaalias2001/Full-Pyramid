function generateFullPyramid() {
    let n = parseInt(prompt("Enter the number of rows for the pyramid:"));

    // Error handling for invalid input
    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        console.error("Please provide a valid positive integer.");
        return;
    }

    let pyramid = '';

    // Determine total width of each row
    const totalWidth = 2 * n - 1;

    // Loop for each row
    for (let i = 1; i <= n; i++) {
        // Calculate spaces needed for center alignment
        const spaces = (totalWidth - 2 * i + 1) / 2;

        // Adding spaces to align numbers properly
        for (let j = 0; j < spaces; j++) {
            pyramid += ' ';
        }

        // Adding numbers in increasing order
        for (let j = 1; j <= i; j++) {
            pyramid += j;
        }

        // Adding numbers in decreasing order
        for (let j = i - 1; j >= 1; j--) {
            pyramid += j;
        }

        pyramid += '\n'; // Move to the next line for the next row
    }

    document.getElementById("pyramidOutput").textContent = pyramid; // Set content to the pyramid string
}

// Call the function to generate the pyramid
generateFullPyramid();