// 1. Filter the list of inventors for those who were born in the 1500's
// 2. Give us an array of the inventors' first and last names
// 3. How many years did all the inventors live?

const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "HammarstrÃ¶m", year: 1829, passed: 1909 }
];

// 1.)
//helper
function fifteenHundreds(obj) {
    if (obj.year > 1499 && obj.year < 1600) {
        return obj
    };
};

// filter

let oldDudes = inventors.filter(fifteenHundreds);
console.log(oldDudes);

// **************************************************************************

// 2.)
function firstLast(object) {
    return object["first"] + " " + object["last"];
}

// map
let x = inventors.map(firstLast);
console.log(x);

// ***************************************************************************

//3.) reduce

function getAge(accum, object) {
    let ageNum = object.passed - object.year;
    return accum + ageNum;
}

// function totalNums(accumulator, currentVal) {
//     return accumulator + currentVal;
// };

let y = inventors.reduce(getAge, 0); //i think it's leaving out first year
console.log(y);