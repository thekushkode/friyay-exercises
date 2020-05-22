
const myArray = [-3, -2, -1, 0, 3, 4, 4, 5];

function sumZero(array) {
    let newArray = [];
    array.sort(function (a, b) {
        console.log(a);
        console.log(b);
        //need for loop?
        if (parseInt(Math.sign(b)) === -1 && b - a === 0) {
            newArray.push(a);
            newArray.push(b);
            console.log(a, b);
            //console.log(newArray);
        }
        console.log(newArray);
    })

}
sumZero(myArray);
