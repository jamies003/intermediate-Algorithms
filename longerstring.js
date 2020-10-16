// loop over the longer string
// loop over the shorter string
// if the character dont match, break out of the inner loop
// if the character do match, keep going
// if you complete the inner loop and find a match, increment the count of matches
// return count 

function search (longer, shorter) {

    let count = 0;

    for (let i = 0; i < longer.length; i++) {
        for (let j = 0; j < shorter.length; j++) {
            console.log(shorter[j], longer[i+j])

            if (shorter[j] !== longer[i+j]){
                console.log("BREAK!")
                break;
            }
            if (j === shorter.length - 1) {
                console.log("FOUND IT!")
                count ++;
            }
        }
    }
    return count;
}
search ("lomonte lolido", "lol")
