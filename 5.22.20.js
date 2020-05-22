const islandArray = [0, 1, 1, 0, 1, 0, 1, 1, 1];
const testArray = [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1];
const testArray2 = [1, 1, 1, 0, 1, 0, 0, 1];

const countIslands = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1 && array[i + 1] !== 1) {
            count++;
        };
    };
    return count;  
};

//console.log(countIslands(islandArray));
//console.log(countIslands(testArray));
//console.log(countIslands(testArray2));