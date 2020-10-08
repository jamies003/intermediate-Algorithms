// Write a function that collect all the odd values in a array!
// Using a helper method 

function oddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }
    newArr = newArr.concat(oddValues(arr.slice(1)));
    console.log(newArr);
    return newArr;
    
}
oddValues([2,11,17,15,4,14,21])