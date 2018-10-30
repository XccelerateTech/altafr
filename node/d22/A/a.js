function processArray(array, cb){
    const results = [];

    for (let elem of array){
        results.push(cb(elem));
    }

    return results;
}

const myArray = [3,6,9,12,15];

processArray(myArray, function(b){
    return b/3
})
//[1,2,3,4,5]

// processArray([4, 8, 2, 7, 5], function(a) {
//     return a * 2;
// });

// [8,16,4,14,10]