const nums = [1, 2, 3, 4, 5, 6, 7]

// helper functions
function addFive(num) {
    return num + 5;
};

function printThing(thing) {
    console.log(thing);
};

function isGreaterThan5(num) {
    return num > 5;
}
console.log(isGreaterThan5(8));
console.log(isGreaterThan5(4));

function totalNums(accumulator, currentVal) {
    return accumulator + currentVal;
};

// For each
// nums.forEach(function (item, index, array) {
//     console.log(item);
//     console.log(index);
//     console.log(array);
// })

// map
let a = nums.map(addFive)
console.log(a);

//filter

let nums1 = nums.filter(isGreaterThan5)
console.log(nums1)


//reduce

console.log(nums.reduce(totalNums, 0));