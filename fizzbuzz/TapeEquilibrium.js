// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

// For example, consider array A such that:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:

// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
// Write a function:

// class Solution { public int solution(int[] A); }

// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

// For example, given:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// the function should return 1, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−1,000..1,000].


let minDifference = Number.MAX_VALUE; // any split we make smaller than max number
let untornTapeVaule = 0;

// calcualte the sum of the untorn tape
for (let i = 0; i < A.length; i++) {
    untornTapeVaule += A[i];
}

let leftSum = 0;
let rightSum = untornTapeVaule;
let currentDiff = Number.MAX_VALUE


// A.lenght = 5 but we need it to stop at 3 only going thorogh 3 spilts 
//find the mininum difference between the torn tape portions.

for(let i = 0; i < A.length; i++) {
    leftSum += A[i]; //incrementing as we pass i
    rightSum -= A[i];//decrementing as we pass i
    currentDiff = Math.abs(leftSum-rightSum)
    
    // console.log(leftSum + " - " + rightSum);
    
    if(minDifference > currentDiff) {
        minDifference = currentDiff;
    }
}

return minDifference;