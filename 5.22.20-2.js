const stockPrices = [7, 1, 5, 3, 6, 4];

function getRich(array) {
    let profitArray = [];
    let potentialProfit = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            potentialProfit = array[j] - array[i];
            profitArray.push(potentialProfit);
        };
    };
    return Math.max.apply(null, profitArray);
};

console.log(getRich(stockPrices));












