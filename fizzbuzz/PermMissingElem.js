// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// function solution(A);

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].

// asking to find missing number in an array

// loop though array to find min and max number 



function solution(A) {

    let missEl = [];
    let minNum = Math.min(...A); // spread array to find min number
    let maxNum = Math.max(...A); // spread array to find max number

    for (let i = minNum; i<maxNum; i++) { //iterate through array
        if (A. indexOf(i) < 0) { // if element is not there it will return -1 which less than 0
            missEl.push(i); // push missing element i to the array

        }
    }

    return missEl;

}

console.log(solution([4,5,6,8]));

// this works but returns as an object wants as integer

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var size = A.length;
    var sum = (size + 1) * (size + 2) / 2;
    for (i = 0; i < size; i++) {
        sum -= A[i];
    }
    return sum;
}