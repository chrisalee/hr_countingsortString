/*
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function countSort(arr) {
    let result = [];
    let mid = arr.length / 2;
    
    for(let i = 0; i < arr.length; i++) {
        if(i < mid) {
            arr[i].splice(1, 1, '-');
            result.push(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    // console.log(result);
    let sorted = result.sort((a, b) => a[0] - b[0]);
    // console.log(sorted)
    let message = sorted.map((data) => data[1]).join(" ");
    console.log(message);
}

//////////////////////////////////////////////////////////////////
function countSort(arr) {
    // Write your code here
    let result = '';
    let half = (arr.length & 1) ? parseInt(arr.length / 2) + 1 : arr.length / 2;
    for(let i = 0; i < half; i++) {
        arr[i][1] = '-';
    }
    arr.sort((a, b) => a[0] - b[0]);
    for(let i = 0; i < arr.length; i++) {
        result = result.concat(arr[i][1]).concat(' ');
    }
    console.log(result);
}
