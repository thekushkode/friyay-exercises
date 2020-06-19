//sumrange

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log('***** Sum Range *****');
console.log(sumRange(3));
console.log(sumRange(5));
console.log(sumRange(10));



//factorial

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
console.log('***** Factorial *****');
console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(10));



//Product of Array
let myArray1 = [1, 2, 3, 4];
let myArray2 = [2, 4, 6, 8, 10];
let myArray3 = [1, 3, 5, 7, 9, 11];

function productOfArray(array) { // What can I use inside a recursive function?
    if (array.length === 0) return [];
    if (array.length === 1) return array[0];
    return array.splice(0, 1) * productOfArray(array);
}

console.log('***** Product of Array *****');
console.log(productOfArray(myArray1));
console.log(productOfArray(myArray2));
console.log(productOfArray(myArray3));

//Searching JSON object

// var myObj = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             },
//             moreStuff: {
//                 thing: {
//                     moreStuff2: {
//                         magicNumber: 445,
//                         something: 'foobar'
//                     }
//                 }
//             },
//             evenMore: {
//                 thing: {
//                     moreStuff2: {
//                         magicNumber: [9, 6, 7, 5000],
//                         something: 'foobar'
//                     }
//                 }
//             },
//         }
//     }
// }

// function jsonContains(object, value) {
//     if () return;
//     return jsonContains(object)
// }

// console.log('***** JSON Object Search *****');
// console.log(jsonContains(myObj, 445));
// console.log(jsonContains(myObj, 'foobar'));
// console.log(jsonContains(myObj, [9, 6, 7, 5000]));