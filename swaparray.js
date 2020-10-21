function swap(arr, idx1, idx2) {

    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    
}
swap([2, 7, 5, 12, 8, 10]);