
const stockPrices = [7, 1, 5, 3, 6, 4];
const stockPrices1 = [8, 7, 1, 3, 5];
const stockPrices2 = [21, 14, 7, 10, 5, 7, 10, 1, 2, 3];
const stockPrices3 = [14, 84, 21, 72, 20, 54, 85, 68, 37, 52, 10, 58, 22, 4, 45, 90, 77, 70, 94, 9, 40, 69, 36, 88, 27, 16, 75, 79, 63, 12, 44, 67, 24, 28, 80, 65, 55, 15, 47, 35, 53, 82, 39, 7, 83, 29, 2, 73, 42, 97, 49, 87, 86, 31, 34, 51, 98, 76, 96, 89, 3, 92, 25, 33, 93, 23, 81, 91, 41, 19, 95, 1, 8, 57, 99, 66, 64, 62, 50, 30, 74, 17, 5, 18, 100, 43, 6, 11, 26, 32, 46, 38, 59, 60, 71, 61, 56, 78, 48, 13];

function getRich(array) {
    const countProfits = (accumulator, currentValue) => accumulator + currentValue;
    let profitArray = [];
    for (let i = 0; i < array.length; i++) {
        singleTradeProfit = array[i + 1] - array[i];
        if (Math.sign(singleTradeProfit) !== -1 && isNaN(singleTradeProfit) === false) {
            profitArray.push(singleTradeProfit);
        }
    };
    return profitArray.reduce(countProfits);
};

console.log(getRich(stockPrices));
console.log(getRich(stockPrices1));
console.log(getRich(stockPrices2));
console.log(getRich(stockPrices3));