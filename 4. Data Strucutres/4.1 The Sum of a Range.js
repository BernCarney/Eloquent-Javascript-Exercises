/**
 * Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
 * 
 * Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed
 * return 55.
 * 
 * As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step
 * is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make
 * sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

function range(start,end,step=1) {
    // Create an empty array to hold the result.
    var result = [start];

    // Make sure to get the absolute value in case step is a negative value.
    step = Math.abs(step);

    // Setup loop to either add or subtract step value.
    if (result[0] > end) {
        while (start >= end) {
            start-=step;

            // if to make sure that the last loop doesn't get pushed if the value is outside the range
            if (start >= end) {
                result.push(start);
            }
        }
    }
    else {
        while (start <= end) {
            start+=step;

            // if to make sure that the last loop doesn't get pushed if the value is outside the range
            if (start <= end) {
                result.push(start);
            }
        }
    }

    return result;
}

function sum(sumRange) {
    var answer = 0;
    for(let i=0;i<sumRange.length;i++){
        answer += sumRange[i];
    }

    return answer;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55