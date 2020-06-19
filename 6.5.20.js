// Warm-up
// Find the mean, median, and mode of the following array:
// [4, 3, 1, 2, 2, 7, 9, 14, 2, 27, 400, 9, 1, 8]
// Mean: Average of all the numbers
// Median: Number at exact middle of sorted array
// Mode: The number that appears the most times

let myArray = [4, 3, 1, 2, 2, 7, 9, 14, 2, 27, 400, 9, 1, 8];

//sum of array
function friYaySum(array) {
    let arrayTotal = array.reduce((a, b) => a + b, 0);
    return arrayTotal;
};

// Mean of array
function friYayMean(array) {
    let arraySum = array.reduce((a, b) => a + b, 0);
    let arrayLength = array.length;
    let mean = arraySum / arrayLength;
    return mean;
};

// Mode of Array
function friYayMedian(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let mostFreqCount = 0;
    let count = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i + 1]) {
            mostFreqCount = sortedArray[i];
            count++;
        };
    }
    return `${mostFreqCount} is the mode. It was spotted ${count} times`;
}

// Median of Array

console.log(friYaySum(myArray));
console.log(friYayMean(myArray));
console.log(friYayMedian(myArray));