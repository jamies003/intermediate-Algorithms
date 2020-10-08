// Write a function that collect all the odd values in a array!
// Using a helper method 

function oddValues(arr) {

    let result = [];
    function helper(numInput) {
        if (numInput.length === 0) {
            return;
        }
        if (numInput[0] % 2 !== 0){
            result.push(numInput[0]);
        }
        helper(numInput.slice(1))
    }
    helper(arr)
    console.log(result);
    return result;
}
oddValues([2,11,17,15,4,14,21])