// Write a function that count down for 10 to 0 using recurssion

function countDown(num) {
    if (num <= 0) {
        console.log("All Done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(10);